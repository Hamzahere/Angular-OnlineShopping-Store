import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
 
  profileUrl: Observable<string | null>;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name,image}, private storage:AngularFireStorage) { }

  ngOnInit() {

    const ref = this.storage.ref(this.data.image);
  
    this.profileUrl = ref.getDownloadURL();

  }

}
