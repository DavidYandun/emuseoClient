import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.css']
})
export class AdminCollectionComponent implements OnInit {
  isLinear = true;
  identificationid:number;

  constructor() { }

  ngOnInit() {
  }

  postIdentificationid(e){
    this.identificationid=e;
    console.log(this.identificationid);
  }
}
