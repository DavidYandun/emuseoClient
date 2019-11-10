import { Component, Inject } from '@angular/core';
import { Island } from 'src/app/services/dwc_location_services/location.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-island',
  templateUrl: './dialog-create-island.component.html',
  styleUrls: ['./dialog-create-island.component.css']
})
export class DialogCreateIslandComponent  {

  constructor(public dialogRef: MatDialogRef<DialogCreateIslandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Island) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
