import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Family } from 'src/app/services/dwc_taxon_services/taxon.service';

@Component({
  selector: 'app-dialog-create-family',
  templateUrl: './dialog-create-family.component.html',
  styleUrls: ['./dialog-create-family.component.css']
})
export class DialogCreateFamilyComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateFamilyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Family) {
    data.family = null;
    data.order = null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
