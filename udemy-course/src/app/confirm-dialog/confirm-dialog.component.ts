import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
 
  profileUrl: Observable<string | null>;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name,image, email, prodId}
  , private storage:AngularFireStorage, private afs: AngularFirestore) 
  { }
date:any;
address:string;
  ngOnInit() {

    const ref = this.storage.ref(this.data.image);
  
    this.profileUrl = ref.getDownloadURL();

  }

  addtoDatabase(a:any){
    console.log(this.date);
    console.log(this.address);
    console.log(this.data.email);
    console.log(this.data.prodId);
    const data = {
      deliveryAddress:this.address,
      deliveryDate:this.date,
      prodId:this.data.prodId,
      userId:this.data.email
    }
    // this.afs.collection('Orders').doc('').add(data).then(res=>{
    //   console.log(res);
    // })
    this.afs.collection('Orders').doc(this.data.email+this.data.prodId).set(data).then(res=>{
      console.log(res);
    }).catch(res=>console.log(res));

    //console.log(a.value);

  }

}
