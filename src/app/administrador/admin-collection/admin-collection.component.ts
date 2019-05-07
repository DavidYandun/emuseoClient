import { Component, OnInit } from '@angular/core';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.css']
})
export class AdminCollectionComponent implements OnInit {
  loggedin = false;
  isLinear = true;
  identificationid: number;
  taxonBool: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
    } else {
      this.router.navigate(['/admin']);
      this.loggedin = false;
    }
  }

  postTaxon(e) {
    this.taxonBool = e;
  }

  postIdentificationid(e) {
    this.identificationid = e;
    console.log(this.identificationid);
  }
}
