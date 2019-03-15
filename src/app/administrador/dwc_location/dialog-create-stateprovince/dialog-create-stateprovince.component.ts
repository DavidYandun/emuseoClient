import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Stateprovince } from 'src/app/services/dwc_location_services/location.service';

@Component({
  selector: 'app-dialog-create-stateprovince',
  templateUrl: './dialog-create-stateprovince.component.html',
  styleUrls: ['./dialog-create-stateprovince.component.css']
})
export class DialogCreateStateprovinceComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateStateprovinceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Stateprovince) { }
  onNoClick(): void {
    this.dialogRef.close();

  }
}
