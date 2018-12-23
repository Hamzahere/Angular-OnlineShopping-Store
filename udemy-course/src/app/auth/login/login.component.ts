import { Component, OnInit} from '@angular/core';
import { LoggingCheckService } from 'src/app/logging-check.service';
import{FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers:[LoggingCheckService]
})
export class LoginComponent implements OnInit {
   emailtosend:string;
   password:string;
  //@Input() name:string;
  obj : {name:string, id:string};
  constructor(private loggingCheckService:LoggingCheckService,private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f){
this.emailtosend = f.value.Email;
this.loggingCheckService.send.emit(this.emailtosend);
    this.authService.login({
      email:f.value.Email,
      password:f.value.Password
    });

   

    
  }

  isAuthenticated():boolean{
    //this.authService.isAuth();
    return this.authService.isAuth();
  }

}
