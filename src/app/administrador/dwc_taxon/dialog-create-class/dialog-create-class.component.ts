import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Class } from 'src/app/services/dwc_taxon_services/taxon.service';

@Component({
  selector: 'app-dialog-create-class',
  templateUrl: './dialog-create-class.component.html',
  styleUrls: ['./dialog-create-class.component.css']
})
export class DialogCreateClassComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Class) {
    
    data.class = null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
