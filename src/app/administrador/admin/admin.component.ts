import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message = "Loading....";
  constructor() { }

  ngOnInit() {
    this.message = "Estas en admin";
    
  }

}
