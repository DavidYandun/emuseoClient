import { Component, Inject } from '@angular/core';
import { County } from 'src/app/services/dwc_location_services/location.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create-county',
  templateUrl: './dialog-create-county.component.html',
  styleUrls: ['./dialog-create-county.component.css']
})
export class DialogCreateCountyComponent  {
  constructor(public dialogRef: MatDialogRef<DialogCreateCountyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: County) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
