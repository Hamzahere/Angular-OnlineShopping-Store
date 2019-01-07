import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { LoggingCheckService } from 'src/app/logging-check.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})


export class SignComponent implements OnInit {

  isdisabled = true;
  constructor(private authService:AuthService,private loggingCheckService:LoggingCheckService) { }

  ngOnInit() {
  }

  submitting(f:NgForm){
    this.loggingCheckService.searchforUser(f.value.mail);
    this.authService.registerUser({
      email: f.value.mail,
      password: f.value.pass
    });

    
    
    
  }
  
}
