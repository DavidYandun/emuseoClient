import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loggedin = false;
  message = "Loading....";
  nColecciones: any;


  constructor(
    private identificationService: IdentificationService,
    private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
      this.message = "Estas en admin";

      this.identificationService.getCollection().subscribe(data => {
        this.nColecciones = data.length;
      })

    } else {
      this.loggedin = false;
      this.router.navigate(['/']);
    }
  }

}
