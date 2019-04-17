import { Component, OnInit, Inject } from '@angular/core';
import { Specie } from 'src/app/services/dwc_taxon_services/taxon.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create-specie',
  templateUrl: './dialog-create-specie.component.html',
  styleUrls: ['./dialog-create-specie.component.css']
})
export class DialogCreateSpecieComponent{
  constructor(public dialogRef: MatDialogRef<DialogCreateSpecieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Specie) { 
      data.genus=null;
      data.specie=null;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
