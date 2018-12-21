import { Injectable, OnInit, Output } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map,retryWhen} from 'rxjs/operators';
import { Observable, Subscription, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/retry';





 export interface details{
  
  name:string,
  age:number,
  email:string;
}







@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoggingCheckService implements OnInit {
  
  exercisesChanged = new Subject<details[]>();
   @Output() sendtoProfile:details[];
 //@Output() sendtoProfile:[any];
  private itemsCollection: AngularFirestoreCollection<details>;
  items: Observable<details[]>;
  anItem:details = {name:"dummy", age:0, email:"du@abc"};
//   checking :[] = [];
// //users_firebase:{}[] = [];
  usersDetails : Observable<any>;
  flags : boolean;
disabled:boolean;
customSubcsription:Subscription;

  constructor(private db:AngularFirestore, private activatedRoute:ActivatedRoute, private router:Router) {
   
    this.itemsCollection = this.db.collection<details>('users');
    
    
  // this.db.collection('users').valueChanges().subscribe((result)=>{
  //     //console.log(result);
  //    // result.
  //     this.users_firebase.push(result);
  //      //this.usersDetails = result;
  //      console.log(this.users_firebase);
  //    });
    
    //console.log(this.items);
    //this.checking = this.itemsCollection.get(this.details_instance);
 // this.checking[{name, age, email}] = this.items;
    //this.itemsCollection.doc(name).set(item);
   }
 ngOnInit(){
  // this.usersDetails =  this.db.collection('users').snapshotChanges()
  // .pipe(map(docArray=>{
  //   return docArray.map(doc =>{
  //     return {
  //       id: doc.payload.doc.id,
  //       name:doc.payload.doc.data()
  //       // email:doc.payload.doc.data().email,
  //       // age:doc.payload.doc.data().age
  //     };
  //   });
  // })
  
  // )
  // .subscribe(result=>{
  //   console.log(result);
 
  //this.fetchfromFirebase();
 }

  checkIfUserExist(data:{name:string, id:string}){

    // for(let i of this.user_details){
    //   if(data.name == i.name && data.id == i.id ){
    //     //console.log('User exist');
    //     this.flags = true;
    //   }
   // }

    // if(this.flags==true){
    //   console.log("User Found loading profile");
    //   this.disabled = true;
    // }
    // else{
    //   console.log("Sorry SignUp or browse for free");
    //  }
    

        this.items = this.itemsCollection.valueChanges();
    this.items
    .subscribe((items:details[])=>{
      
      this.sendtoProfile = items;
      this.exercisesChanged.next([...this.sendtoProfile]);
      for(let item of items){
        if(item.name == data.name){
          this.anItem = item;
          console.log('user found');
         

        
          //this.checking.push(item);
          this.flags = false;
          //this.router.navigate(['/user-profile']);
          
        }
        
      }

      
      if(this.flags==false)
      this.router.navigate(['/user-profile']);
      
    },)
    
     }

  

  
}
