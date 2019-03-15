import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Continent } from 'src/app/services/dwc_location_services/location.service';

@Component({
  selector: 'app-dialog-create-continent',
  templateUrl: './dialog-create-continent.component.html',
  styleUrls: ['./dialog-create-continent.component.css']
})
export class DialogCreateContinentComponent {
  constructor(public dialogRef: MatDialogRef<DialogCreateContinentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Continent) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
