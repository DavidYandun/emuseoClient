import { Component, Inject } from '@angular/core';
import { Period } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create-period',
  templateUrl: './dialog-create-period.component.html',
  styleUrls: ['./dialog-create-period.component.css']
})
export class DialogCreatePeriodComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreatePeriodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Period) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
