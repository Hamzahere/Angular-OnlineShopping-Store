import { Injectable,EventEmitter } from '@angular/core';
import { AuthData } from './auth/sign/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {environment} from '../environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  authChange = new Subject<boolean>();
  userProfileopen = new Subject<string>();
  signInMode = false;
  user_details:any;
  credentialsReady = new Subject<any>();
  x;
  y:Observable<any>;
  

  constructor(private db:AngularFirestore, private router:Router, public afauth:AngularFireAuth) { }

  registerUser(authData:AuthData){
    this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result=>{
//this.authSuccessfully();
console.log(result);
this.y = this.afauth.user.pipe(map( data => data.email.toString()));
this.y.subscribe((data)=>{
  console.log(data);
})
//console.log(this.y);

this.isAuthenticated = true;
    this.authChange.next(true);
    })
    .catch((result)=>{
      console.log(result);
    });
    
   
    //let a = this.afauth.user.pipe(map( data => data.email.toString()));
    //console.log(a);

  }

  login(authData:AuthData){
    
    this.afauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(()=>{
      this.isAuthenticated = true;
      this.authSuccessfully();
     
      
    }).catch((result)=>{
      console.log(result);
    })

    //previouslt this was this.x = this.afauth.user.pipe(map(data=>data.email.toString()));
    this.x = this.afauth.user.pipe(map( data => data.email.toString()));
   // this.db.collection('users').add(authData);

  }

  logout(){
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
    
  }

  

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
   //this.router.navigate(['/user-profile']);
  }

  facebookSignInViaPopup(){
    this.afauth.auth.signInWithPopup(new auth.FacebookAuthProvider())
    .then((userCredentials) =>{//console.log(userCredentials)
   // this.authSuccessfully();
   this.user_details = userCredentials;
   console.log(this.user_details);
   environment.fbSignIn = true;
  
  
    }).catch((err)=>{
      console.log(err);
      this.router.navigate(['/login']);
      this.isAuthenticated = false;
    });
    
    this.authSuccessfully();
      this.credentialsReady.next(this.user_details);
    
    
  }

  facebookSignInViaRedirect() {
    this.afauth.auth.signInWithRedirect(new auth.FacebookAuthProvider())
      .then(()=>{
        this.authSuccessfully();
        environment.fbSignIn = true;
      });
     // this.authSuccessfully();
     //this.isAuthenticated = true;
  }

  private getProviderInstance(provider: string) {
    let providerInstance;
    
     
        providerInstance = new auth.FacebookAuthProvider();
        
    return providerInstance;
  }

  signIn(mode: string, provider: string) {
   if(mode === environment.modes.POPUP) 
   {this.afauth.auth.signInWithPopup(this.getProviderInstance(provider));
    this.isAuthenticated = true;
   // this.router.navigate(['/user-profile']);
  }
else{
      this.afauth.auth.signInWithRedirect(this.getProviderInstance(provider));
      this.isAuthenticated = true;
      //this.router.navigate(['/user-profile']);
}
  }

  // signInOrSignUp(email, password) {
  //   this.signInMode ? this.afauth.auth.signInWithEmailAndPassword(email, password)
  //              : this.afauth.auth.createUserWithEmailAndPassword(email, password);
  // }

  
}
