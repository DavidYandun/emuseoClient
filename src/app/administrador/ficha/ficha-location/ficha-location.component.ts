import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/services/dwc_location_services/location.service';

@Component({
  selector: 'app-ficha-location',
  templateUrl: './ficha-location.component.html',
  styleUrls: ['./ficha-location.component.css']
})
export class FichaLocationComponent implements OnInit {
  @Input() identificationid:any;
  location:any;
  constructor(private locationService:LocationService) { }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    this.locationService.getLocationId(this.identificationid).subscribe(data => {
      this.location = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
