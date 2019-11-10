import { Component, Inject } from '@angular/core';
import { Municipality } from 'src/app/services/dwc_location_services/location.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-municipality',
  templateUrl: './dialog-create-municipality.component.html',
  styleUrls: ['./dialog-create-municipality.component.css']
})
export class DialogCreateMunicipalityComponent {
  constructor(public dialogRef: MatDialogRef<DialogCreateMunicipalityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Municipality) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
