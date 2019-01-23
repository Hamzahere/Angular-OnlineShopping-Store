import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatalogicService {
  items: Observable<any[]>;
  itemsArray:any[];
  subcribtion:Subscription;
  hampers:any;
  dataArr:any;
   
  constructor(db: AngularFirestore) { 
    this.hampers = db.collection("Hampers");

  }

  getHamper(){

    this.items = this.hampers.valueChanges();
    // const itemsArr = this.items.pipe(
    //   map(res=>)
    //   );
    this.subcribtion =  this.items.subscribe(val=>{
      //console.log(val);
this.itemsArray = val.filter(val=>val.prodId == 'bir1');
console.log(this.itemsArray);
    })
   
//this.subcribtion.unsubscribe();
return this.itemsArray;

  }

}
