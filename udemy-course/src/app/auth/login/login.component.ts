import { Component, OnInit} from '@angular/core';
import { LoggingCheckService } from 'src/app/logging-check.service';
import{FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers:[LoggingCheckService]
})
export class LoginComponent implements OnInit {
   emailtosend:string;
   password:string;

   providers = environment.providers;
  modes = environment.modes;
  
   
  //@Input() name:string;
  obj : {name:string, id:string};
  constructor(public afAuth: AngularFireAuth,private loggingCheckService:LoggingCheckService,private authService: AuthService) {
    
   }

  
  ngOnInit() {
    console.log(this.afAuth.authState);
  }

  onSubmit(f){
this.emailtosend = f.value.Email;
this.loggingCheckService.send.next(this.emailtosend);
    this.authService.login({
      email:f.value.Email,
      password:f.value.Password
    });

   

    
  }

  isAuthenticated():boolean{
    //this.authService.isAuth();
    return this.authService.isAuth();
  }

  facebookSignInViaPopup(){
    this.authService.facebookSignInViaPopup();
  }

 facebookSignInViaRedirect(){
   this.authService.facebookSignInViaRedirect();
 }

 signInWithModeAndProvider(mode: string, provider: string) {
 
  this.authService.signIn(mode, provider);
   console.log(this.afAuth.authState);
}



}
