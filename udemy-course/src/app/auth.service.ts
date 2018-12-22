import { Injectable } from '@angular/core';
import { AuthData } from './auth/sign/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  authChange = new Subject<boolean>();
  userProfileopen = new Subject<string>();

  constructor(private router:Router, private afauth:AngularFireAuth) { }

  registerUser(authData:AuthData){
    this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result=>{
this.authSuccessfully();
    })
    .catch((result)=>{
      console.log(result);
    });

  }

  login(authData:AuthData){
    this.afauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(()=>{
      this.isAuthenticated = true;
      this.authSuccessfully();
      
    }).catch((result)=>{
      console.log(result);
    })

  }

  logout(){
    this.authChange.next(false);
    this.router.navigate(['./login']);
    this.isAuthenticated = false;
  }

  

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/user-profile']);
  }
  
}
