import { Component, OnInit, Input, OnChanges, SimpleChanges,OnDestroy } from '@angular/core';
import { LoggingCheckService } from 'src/app/logging-check.service';
import { Observable, Subscription, Subject } from 'rxjs';
import {details} from '../logging-check.service';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {environment} from 'src/environments/environment';
import {User} from 'firebase';
import { AuthData } from '../auth/sign/auth-data.model';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface userHampers {
  value: string;
  viewValue: string;
}

export interface itemstoShow{
  image:string;
  items:{};
  name: string;
 price: number;
 prodId: string;
  type:string
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges,OnDestroy   {
  //flagfromService:boolean;
  email:string;
  exerciseSubscription: Subscription;
  emailSubscription: Subscription;
  recievedfromService:details[];
  username:any;
  fbSubscribtion :Subscription;
  forloggingService:Subscription;
  user :User;
  displayName:string;
  useremail:string;
  x;
  photo:any;
  a:any;
  Birthday$:Observable<itemstoShow[]>;
AdvancedCourses$:Observable<itemstoShow[]>;
  
  Hampers:{}[];
  hampers:any;
  items:Observable<any>;
  singleItem:itemstoShow;
  itemsArray:itemstoShow[];
  subcribtion:Subscription;
  selected = "birthday";
  userChoice = ""
  ref:[];
  profileUrl: Observable<string | null>;
  

  constructor(public afAuth: AngularFireAuth,private loggingCheckService:LoggingCheckService, public authService:AuthService, private db: AngularFirestore,private dialog:MatDialog) { 
    
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
    this.hampers = this.db.collection("Hampers");
    this.items = this.hampers.valueChanges();

    this.fbSubscribtion = this.afAuth.authState.subscribe(user=>{
    // console.log(user);
     //this.user = user;
     this.displayName = user.displayName;
     this.email = user.email;
     this.photo = user.photoURL;
     console.log(this.photo);

   }, ()=>{}, ()=>{
     console.log(this.email);
   })
     //this.emailSubscription =  this.authService.x.subscribe(email=>{
     
      //this.x = email;
     // console.log(this.email);
  //   });
   // this.a =  this.afAuth.authState;
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
          // if(environment.fbSignIn == true)
          //   this.authService.facebookSignInViaPopup();
    
          this.Birthday$ = this.items.pipe(
            map(courses=>courses.filter(courses=>courses.type == 'birthday'))
          );
          
          this.Birthday$.subscribe(data=>{
            this.itemsArray= data;
           // console.log(data['image']);
            //  const ref = this.storage.ref('Birthday/birthday2.jpg');
            //   this.profileUrl = ref.getDownloadURL();
            //   this.profileUrl.subscribe(console.log);
          
          });
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
    this.fbSubscribtion.unsubscribe();
    //this.emailSubscription.unsubscribe();
   //this.forloggingService.unsubscribe();
  }

  logout(){
  this.authService.logout();
  this.afAuth.auth.signOut();
  }

  onSelect(){
    // alert('clicked');
    
    console.log(this.selected);

    const size$ = new Subject<string>();
const queryObservable:Observable<any> = size$.pipe(
  switchMap(type => 
    this.db.collection('Hampers', ref => ref.where('type', '==', type)).valueChanges()
  )
);

// subscribe to changes
queryObservable.subscribe(queriedItems => {
  console.log(queriedItems);  
  this.itemsArray= queriedItems;
});

// trigger the query
size$.next(this.selected);


// re-trigger the query!!!
//size$.next('small');
  //   if(this.selected == "birthday")
  //   {this.hampers=this.db.collection('Hampers', ref => ref.where('type', '==', 'birthday'))
  //   this.items = this.hampers.valueChanges();
  // }
  //   else if(this.selected == "anniversary"){
  //     this.db.collection('Hampers'), ref => ref.where('type', '==', 'anniversary').get()
  //     .then(data=>{
  //       console.log(data);
  //     })
      
  //     // this.items = this.hampers.valueChanges();
  //     // this.Birthday$.subscribe(data=>{
  //     //   this.itemsArray= data;
  //     //   console.log(data['image']);
  //     //   // const ref = this.storage.ref(data['image']);
  //     //   //    this.profileUrl = ref.getDownloadURL();
      
  //     // });
      
  //   }
  //   else if(this.selected == "surprise")
  //   this.items = this.hampers.where("type", "==", "surprise");
  // //  await this.getData();
  // // const ref = this.storage.ref('Birthday/birthday2.jpg');
  // //    this.profileUrl = ref.getDownloadURL();
  
  }

  uploadFile(event) {
    // const file = event.target.files[0];
    // const filePath = 'birthday1';
    // const task = this.storage.upload(filePath, file);
  }

  getData(){
    this.items = this.hampers.valueChanges();
    this.subcribtion =  this.items.subscribe(val=>{
      //console.log(val);
this.itemsArray = val.filter(val=>val.prodId == 'bir1');
console.log(this.itemsArray);
    })
  }

  run(event:any){
    console.log(event);

  }

  write(event:any){
    console.log(event);
   const dialogRef =  this.dialog.open(ConfirmDialogComponent,  {
      
      data:{ 
       name: event.name,
       image:event.image, 
      }
    });

  dialogRef.afterClosed().subscribe(result=>{
    console.log(result);
  });

    
    
  }
  





}
