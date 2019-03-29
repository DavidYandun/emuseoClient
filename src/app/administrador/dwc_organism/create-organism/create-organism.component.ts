import { Component, OnInit, Input } from '@angular/core';
import { OrganismService } from 'src/app/services/dwc_organism_services/organism.service';

@Component({
  selector: 'app-create-organism',
  templateUrl: './create-organism.component.html',
  styleUrls: ['./create-organism.component.css']
})
export class CreateOrganismComponent implements OnInit {
  @Input() identificationid: number;
  organism: any = {
    identificationid: null,
    organismname: null,
    organismscope: null,
    organismremarks: null
  }
  constructor(private organismService: OrganismService) { }

  ngOnInit() {
  }
  postOrganism() {
    this.organism.identificationid = this.identificationid;
    if (this.organism.identificationid) {
      this.organismService.postOrganism(this.organism).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(JSON.stringify(error));
        });
    }
  }
}
