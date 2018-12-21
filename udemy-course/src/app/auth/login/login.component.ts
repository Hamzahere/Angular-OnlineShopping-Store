import { Component, OnInit, Input } from '@angular/core';
import { LoggingCheckService } from 'src/app/logging-check.service';
import{FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers:[LoggingCheckService]
})
export class LoginComponent implements OnInit {
  @Input() username:string;
  @Input() id:string;
  @Input() name:string;
  obj : {name:string, id:string};
  constructor(private loggingCheckService:LoggingCheckService) { }

  ngOnInit() {
  }

  check(){

    //console.log(name);
this.obj = {name:this.username, id:this.id};
console.log(this.obj);
    //let i = JSON.parse(name);
    //console.log(i)
   this.loggingCheckService.checkIfUserExist(this.obj);
  }

}
