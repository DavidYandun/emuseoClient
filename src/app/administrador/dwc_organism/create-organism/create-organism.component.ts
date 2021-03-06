import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrganismService } from 'src/app/services/dwc_organism_services/organism.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-organism',
  templateUrl: './create-organism.component.html',
  styleUrls: ['./create-organism.component.css']
})
export class CreateOrganismComponent implements OnInit {
  @Input() identificationid: number;
  @Output() organismBool = new EventEmitter();

  organism = this.formBuilder.group({
    identificationid: [null],
    organismname: [null, Validators.required],
    organismscope: [null],
    organismremarks: [null]
  });
  constructor(
    private formBuilder: FormBuilder,
    private organismService: OrganismService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  postOrganism() {
    this.organism.value.identificationid = this.identificationid;
    if (this.organism.value.identificationid) {
      this.organismService.postOrganism(this.organism.value).subscribe(data => {
        this.organismBool.emit(true);
        this.openSnackBar('REGISTRO DE ORGANISMO EXITOSO', '✅');
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
