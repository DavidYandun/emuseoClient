import { Component, OnInit, Input } from '@angular/core';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';

@Component({
  selector: 'app-ficha-taxon',
  templateUrl: './ficha-taxon.component.html',
  styleUrls: ['./ficha-taxon.component.css']
})


export class FichaTaxonComponent implements OnInit {
  @Input() identificationid: any;
  taxon: any;
  constructor(private taxonService: TaxonService) { }

  ngOnInit() {
    this.getTaxon();
  }

  getTaxon() {
    this.taxonService.getTaxonId(this.identificationid).subscribe(data => {
      this.taxon = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
