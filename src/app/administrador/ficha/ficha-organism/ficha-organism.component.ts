import { Component, OnInit, Input } from '@angular/core';
import { OrganismService } from 'src/app/services/dwc_organism_services/organism.service';

@Component({
  selector: 'app-ficha-organism',
  templateUrl: './ficha-organism.component.html',
  styleUrls: ['./ficha-organism.component.css']
})
export class FichaOrganismComponent implements OnInit {
  @Input() identificationid: any;
  organism: any;
  constructor(private organismService: OrganismService) { }

  ngOnInit() {
    this.getOrganism();
  }
  getOrganism() {
    this.organismService.getOrganismId(this.identificationid).subscribe(data => {
      this.organism = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
