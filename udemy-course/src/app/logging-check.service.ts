import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingCheckService {

  user_details = [{name:"Hamza", id:"001"},
                  {name:"Faaiz", id:"002"}
];
flags : boolean;
disabled:boolean;
  constructor() { }

  checkIfUserExist(data:{name:string, id:string}){

    for(let i of this.user_details){
      if(data.name == i.name && data.id == i.id ){
        //console.log('User exist');
        this.flags = true;
      }
      
    }

    if(this.flags==true){
      console.log("User Found loading profile");
      this.disabled = true;
    }
    else{
      console.log("Sorry SignUp or browse for free");
     }
  }
}
