import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Phylum } from 'src/app/services/dwc_taxon_services/taxon.service';

@Component({
  selector: 'app-dialog-create-phylum',
  templateUrl: './dialog-create-phylum.component.html',
  styleUrls: ['./dialog-create-phylum.component.css']
})
export class DialogCreatePhylumComponent {
  constructor(public dialogRef: MatDialogRef<DialogCreatePhylumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Phylum) { 
      data.phylum=null;
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
