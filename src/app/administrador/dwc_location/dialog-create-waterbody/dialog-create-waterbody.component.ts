import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Waterbody } from 'src/app/services/dwc_location_services/location.service';

@Component({
  selector: 'app-dialog-create-waterbody',
  templateUrl: './dialog-create-waterbody.component.html',
  styleUrls: ['./dialog-create-waterbody.component.css']
})
export class DialogCreateWaterbodyComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateWaterbodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Waterbody) { }
  onNoClick(): void {
    this.dialogRef.close();

  }
}
