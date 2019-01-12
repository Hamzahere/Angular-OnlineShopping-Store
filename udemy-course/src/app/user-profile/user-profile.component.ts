import { Component, OnInit, Input, OnChanges, SimpleChanges,OnDestroy } from '@angular/core';
import { LoggingCheckService } from 'src/app/logging-check.service';
import { Observable, Subscription } from 'rxjs';
import {details} from '../logging-check.service';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {environment} from 'src/environments/environment';
import {User} from 'firebase';
import { AuthData } from '../auth/sign/auth-data.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges,OnDestroy   {
  //flagfromService:boolean;
  email:string;
  exerciseSubscription: Subscription;
  recievedfromService:details[];
  username:any;
  fbSubscribtion :Subscription;
  forloggingService:Subscription;
  user :User;
  x;
  a:any;

  constructor(public afAuth: AngularFireAuth,private loggingCheckService:LoggingCheckService, public authService:AuthService) { 
    
    // this.loggingCheckService.send.subscribe((data)=>{
    //   console.log(data);
    //  this.username = data;
    //       })
 // if(this.flagfromService == false){
  // this.recievedfromService = this.loggingCheckService.sendtoProfile;
  // console.log(this.recievedfromService);
  //}
  
  
  }
  ngOnInit() {
    //this.recievedfromService = this.loggingCheckService.sendtoProfile;  this is was before 
    //this.flagfromService = this.loggingCheckService.sendflagToUser();

    this.x = this.authService.x;
    this.a =  this.afAuth.authState;
    // for(var property in this.x) {
    //   console.log(property + "=" + this.x[property]);
 // }
    
   // console.log('x is '+this.x);
     this.exerciseSubscription =  this.loggingCheckService.exercisesChanged.subscribe(
      (exercises) => {this.recievedfromService = exercises;
        //console.log(this.recievedfromService);
        //console.log(this.email);
      }
    );
    this.loggingCheckService.fetchData();

    this.loggingCheckService.send.pipe(map(data =>
      console.log(data+"email ones")
      ));
    //   console.log(data+"email ones");
    //  this.username = data;
    

           this.authService.credentialsReady.pipe(map((user)=>{
            this.username = user.displayName;
            console.log('data from facebook');
            console.log('data recieved from authservice'+this.username);

          }))
          if(environment.fbSignIn == true)
            this.authService.facebookSignInViaPopup();
    
    
    //this.loggingCheckService.checkIfUserExist();
   
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
     console.log('on chnges');
     console.log(this.email);

    // console.log(changes);
   // this.recievedfromService = this.loggingCheckService.sendtoProfile;
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
    //this.fbSubscribtion.unsubscribe();
   //this.forloggingService.unsubscribe();
  }

  logout(){
  this.authService.logout();
  }



}
