import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { DatalogicService } from '../datalogic.service';
import { map } from 'rxjs/operators';

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

 
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  Hampers:{}[];
  hampers:any;
  items:any;
  singleItem:itemstoShow;
  itemsArray:itemstoShow[];
  subcribtion:Subscription;
  selected = "birthday";
  
  profileUrl: Observable<string | null>;
  
  

  constructor(private storage: AngularFireStorage, private datalogicService:DatalogicService, private db: AngularFirestore) { }

  ngOnInit() 
  {
    
    this.hampers = this.db.collection("Hampers");
    this.items = this.hampers.valueChanges();
    this.subcribtion =  this.items.subscribe(val=>{
      //console.log(val);
this.itemsArray = val.filter(val=>val.type == 'birthday');
console.log(this.itemsArray);
for(let i=0;i<this.itemsArray.length;i++){
  console.log(this.itemsArray[i].image);
  const ref = this.storage.ref(this.itemsArray[i].image);
  
   this.profileUrl = ref.getDownloadURL();
  }
    })
    
  }

  
  async onSelect(){
    // alert('clicked');
    
   await this.getData();
  const ref = this.storage.ref('Birthday/birthday3.jpg');
     this.profileUrl = ref.getDownloadURL();
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



}
