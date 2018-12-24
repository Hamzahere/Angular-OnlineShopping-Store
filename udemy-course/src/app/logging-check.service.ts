import { Injectable, OnInit, EventEmitter } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map,retryWhen} from 'rxjs/operators';
import { Observable, Subscription, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/retry';
import { switchMap } from 'rxjs/operators';






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
  
   size$ = new Subject<string>();
  exercisesChanged = new Subject<details[]>();
    sendtoProfile:details[];
 //@Output() sendtoProfile:[any];
  private itemsCollection: AngularFirestoreCollection<details>;
  items: Observable<details[]>;
  
//   checking :[] = [];
// //users_firebase:{}[] = [];
  //usersDetails : Observable<any>;
  flags : boolean;
disabled:boolean;
customSubcsription:Subscription;
queryObservable:any;
send = new Subject<string>();


  constructor(private db:AngularFirestore, private activatedRoute:ActivatedRoute, private router:Router) {

    

   
    this.itemsCollection = this.db.collection<details>('users');
    
    this.size$.next('hamzahere99@gmail.com');
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

  fetchData(){

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
      //console.log(items);
      this.sendtoProfile  = items;
      this.exercisesChanged.next([...this.sendtoProfile]);
      //this.router.navigate(['/user-profile']);
    })
    }
      
    searchforUser(email:string){
      // this.queryObservable = this.size$.pipe(
      //   switchMap(size => 
      //     this.db.collection('items', ref => ref.where('email', '==', size)).valueChanges()
      //   )
      // );
  
      // this.queryObservable.subscribe(queriedItems => {
      //   console.log(queriedItems);  
      // });
      

    }
  
    
}
