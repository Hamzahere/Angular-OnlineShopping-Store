import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  isdisabled = true;
  constructor() { }

  ngOnInit() {
  }

  submitting(f:NgForm){
    console.log(f);
  }
}
