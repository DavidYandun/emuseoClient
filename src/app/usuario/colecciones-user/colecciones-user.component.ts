import { Component, OnInit } from '@angular/core';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';

@Component({
  selector: 'app-colecciones-user',
  templateUrl: './colecciones-user.component.html',
  styleUrls: ['./colecciones-user.component.css']
})
export class ColeccionesUserComponent implements OnInit {
  loggedin = false;
  animalia: any;
  plantae: any;
  fungi: any;
  monera: any;
  protista: any;
  constructor(private identificationService: IdentificationService) { }
  ngOnInit() {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
    this.identificationService.getReinos('Animalia').subscribe(data => {
      this.animalia = data;
    });
    this.identificationService.getReinos('Plantae').subscribe(data => {
      this.plantae = data;
    });
    this.identificationService.getReinos('Fungi').subscribe(data => {
      this.fungi = data;
    });
    this.identificationService.getReinos('Monera').subscribe(data => {
      this.monera = data;
    });
    this.identificationService.getReinos('Protista').subscribe(data => {
      this.protista = data;
    });
  }

}
