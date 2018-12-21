import { Component, OnInit, Input, OnChanges, SimpleChanges,OnDestroy } from '@angular/core';
import { LoggingCheckService } from 'src/app/logging-check.service';
import { Observable, Subscription } from 'rxjs';
import {details} from '../logging-check.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges,OnDestroy   {
  //flagfromService:boolean;
  exerciseSubscription: Subscription;
  recievedfromService:details[];

  constructor(private loggingCheckService:LoggingCheckService) { 
    
 // if(this.flagfromService == false){
  // this.recievedfromService = this.loggingCheckService.sendtoProfile;
  // console.log(this.recievedfromService);
  //}
  }
  ngOnInit() {
    //this.recievedfromService = this.loggingCheckService.sendtoProfile;  this is was before 
    //this.flagfromService = this.loggingCheckService.sendflagToUser();
     this.exerciseSubscription =  this.loggingCheckService.exercisesChanged.subscribe(
      (exercises) => {this.recievedfromService = exercises;
        console.log(this.recievedfromService);
      }
    );
    
    //this.loggingCheckService.checkIfUserExist();
   
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
     console.log('on chnges');
    // console.log(changes);
   // this.recievedfromService = this.loggingCheckService.sendtoProfile;
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }



}
