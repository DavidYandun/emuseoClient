import { Component, OnInit } from '@angular/core';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';


@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.css']
})
export class AdminCollectionComponent implements OnInit {
  isLinear = true;
  identificationid: number;
  taxonBool: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  postTaxon(e) {
    this.taxonBool = e;
  }

  postIdentificationid(e) {
    this.identificationid = e;
    console.log(this.identificationid);
  }
}
