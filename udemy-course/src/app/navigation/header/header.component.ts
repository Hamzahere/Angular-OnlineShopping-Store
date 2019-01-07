import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavistoggle = new EventEmitter<void>();
  isAuth:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit() {
this.isAuth = this.authService.isAuth();
  }

  sidenavtoggle() {

    this.sidenavistoggle.emit();
     
   }
}
