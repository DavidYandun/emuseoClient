import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/services/dwc_location_services/location.service';

@Component({
  selector: 'app-ficha-location',
  templateUrl: './ficha-location.component.html',
  styleUrls: ['./ficha-location.component.css']
})
export class FichaLocationComponent implements OnInit {
  @Input() identificationid: any;
  location: any;

  lat: number=-2.098954;
  lng: number=-76.364147;
  zoom:number=6;
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocation();


  }
  getLocation() {
    this.locationService.getLocationId(this.identificationid).subscribe(data => {
      this.location = data;
      this.lat = this.location.decimallatitude;
      this.lng = this.location.decimallongitude;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
