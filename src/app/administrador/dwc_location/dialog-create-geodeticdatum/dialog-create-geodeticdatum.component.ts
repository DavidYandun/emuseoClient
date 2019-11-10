import { Inject, Component } from '@angular/core';
import { Geodeticdatum } from 'src/app/services/dwc_location_services/location.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-geodeticdatum',
  templateUrl: './dialog-create-geodeticdatum.component.html',
  styleUrls: ['./dialog-create-geodeticdatum.component.css']
})
export class DialogCreateGeodeticdatumComponent  {

  constructor(public dialogRef: MatDialogRef<DialogCreateGeodeticdatumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Geodeticdatum) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
