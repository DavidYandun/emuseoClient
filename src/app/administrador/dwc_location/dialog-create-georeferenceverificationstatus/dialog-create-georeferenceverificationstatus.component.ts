import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Georeferenceverificationstatus } from 'src/app/services/dwc_location_services/location.service';

@Component({
  selector: 'app-dialog-create-georeferenceverificationstatus',
  templateUrl: './dialog-create-georeferenceverificationstatus.component.html',
  styleUrls: ['./dialog-create-georeferenceverificationstatus.component.css']
})
export class DialogCreateGeoreferenceverificationstatusComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateGeoreferenceverificationstatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Georeferenceverificationstatus) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
