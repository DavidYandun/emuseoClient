import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loggedin=false;
  message = "Loading....";
  constructor(private router:Router) { }

  ngOnInit() {
if(sessionStorage.getItem('loggedin')=='true'){
  this.loggedin=true;
  this.message = "Estas en admin";
}else{
  this.loggedin=false;
  this.router.navigate(['/']);
}
    
    
  }

}
