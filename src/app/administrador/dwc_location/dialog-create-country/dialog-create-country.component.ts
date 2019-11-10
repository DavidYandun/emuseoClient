import { Component, Inject } from '@angular/core';
import { Country } from 'src/app/services/dwc_location_services/location.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-country',
  templateUrl: './dialog-create-country.component.html',
  styleUrls: ['./dialog-create-country.component.css']
})
export class DialogCreateCountryComponent {
  constructor(public dialogRef: MatDialogRef<DialogCreateCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
