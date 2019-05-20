import { Component, Inject } from '@angular/core';
import { TaxonomicStatus } from 'src/app/services/dwc_taxon_services/taxon.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create-taxonomicstatus',
  templateUrl: './dialog-create-taxonomicstatus.component.html',
  styleUrls: ['./dialog-create-taxonomicstatus.component.css']
})
export class DialogCreateTaxonomicstatusComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateTaxonomicstatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaxonomicStatus) { 
      data.taxonomicstatus=null;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
