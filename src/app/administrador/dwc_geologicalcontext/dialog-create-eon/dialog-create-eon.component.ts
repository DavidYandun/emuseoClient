import { Component, Inject } from '@angular/core';
import { Eon } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-create-eon',
  templateUrl: './dialog-create-eon.component.html',
  styleUrls: ['./dialog-create-eon.component.css']
})
export class DialogCreateEonComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateEonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Eon) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
