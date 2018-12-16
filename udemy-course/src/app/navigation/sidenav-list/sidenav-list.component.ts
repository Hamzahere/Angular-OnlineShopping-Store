import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenav_toggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onToggleSideNav() {

   this.sidenav_toggle.emit();
    
  }
}
