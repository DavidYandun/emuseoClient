import { Component, OnInit } from '@angular/core';
import { OrganismService } from 'src/app/services/dwc_organism_services/organism.service';

@Component({
  selector: 'app-create-organism',
  templateUrl: './create-organism.component.html',
  styleUrls: ['./create-organism.component.css']
})
export class CreateOrganismComponent implements OnInit {
  organism: any = {
    identificationid: null,
    organismname: null,
    organismscope: null,
    organismremarks: null
  }
  constructor(private organismService:OrganismService) { }
 
  ngOnInit() {
  }
  postOrganism() {
    this.organismService.postOrganism(this.organism).subscribe(resultado => {
      console.log(this.organism);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
