import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genus } from 'src/app/services/dwc_taxon_services/taxon.service';

@Component({
  selector: 'app-dialog-create-genus',
  templateUrl: './dialog-create-genus.component.html',
  styleUrls: ['./dialog-create-genus.component.css']
})
export class DialogCreateGenusComponent {
  constructor(public dialogRef: MatDialogRef<DialogCreateGenusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Genus) { 
      
      data.genus=null;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
