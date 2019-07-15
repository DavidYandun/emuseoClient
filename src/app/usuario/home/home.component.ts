import { Component, OnInit } from '@angular/core';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  animalia: any;
  plantae: any;
  fungi: any;
  monera: any;
  protista: any;
  constructor(private identificationService: IdentificationService) { }

  ngOnInit() {
    
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
