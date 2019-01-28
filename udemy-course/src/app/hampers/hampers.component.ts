import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subscription, Subject, concat } from 'rxjs';
import { DatalogicService } from '../datalogic.service';
import { map, switchMap } from 'rxjs/operators';
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
  selector: 'app-hampers',
  templateUrl: './hampers.component.html',
  styleUrls: ['./hampers.component.css']
})

export class HampersComponent implements OnInit {

 
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
  
  @ViewChild('save') saveButton : ElementRef;

  

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private dialog:MatDialog) { }

  ngOnInit() 
  {
    
    this.hampers = this.db.collection("Hampers");
    this.items = this.hampers.valueChanges();
//     this.subcribtion =  this.items.subscribe(val=>{
//       //console.log(val);
// this.itemsArray = val.filter(val=>val.type == 'birthday');
// console.log(this.itemsArray);
// for(let i=0;i<this.itemsArray.length;i++){
//   console.log(this.itemsArray[i].image);
//   const ref = this.storage.ref(this.itemsArray[i].image);
  
//    this.profileUrl = ref.getDownloadURL();
//   }
//     })

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

this.AdvancedCourses$ = this.items.pipe(
  map(courses=>courses.filter(courses=>courses.type == 'anniversary'))
);

 const result$ =  concat(this.items, this.AdvancedCourses$);
 result$.subscribe(console.log);


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
    const file = event.target.files[0];
    const filePath = 'birthday1';
    const task = this.storage.upload(filePath, file);
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
    this.dialog.open(ConfirmDialogComponent,  {
      
      data:{ 
       name: event.name,
       image:event.image
      }
    });;
   // console.log(this.saveButton);
  }
  



}
