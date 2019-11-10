import { Component, OnInit, Input } from '@angular/core';
import { OrganismService } from 'src/app/services/dwc_organism_services/organism.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-organism',
  templateUrl: './update-organism.component.html',
  styleUrls: ['./update-organism.component.css']
})
export class UpdateOrganismComponent implements OnInit {
  @Input() identificationid: number;

  organism = new FormGroup({
    identificationid: new FormControl(null),
    organismname: new FormControl(null),
    organismscope: new FormControl(null),
    organismremarks: new FormControl(null),
  });
  constructor(
    private formBuilder: FormBuilder,
    private organismService: OrganismService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.organismService.getOrganismId(this.route.snapshot.params['identificationid']).subscribe(data => {
      if (this.organism) {
        this.organism = new FormGroup({
          organismid: new FormControl(data.organismid),
          identificationid: new FormControl(data.identificationid),
          organismname: new FormControl(data.organismname),
          organismscope: new FormControl(data.organismscope),
          organismremarks: new FormControl(data.organismremarks),
        });
      }
    })
    console.log(this.organism.value);

  }
  updateOrganism() {
    if (this.organism.value.identificationid) {
      this.organismService.putOrganism(this.organism.value.organismid, this.organism.value).subscribe(data => {
        this.openSnackBar('ACTUALIZACIÓN DE ORGANISMO EXITOSO', '✅');
      },
        error => {
          this.openSnackBar(error.error.message, '🛑');
          console.log(JSON.stringify(error));
        });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
