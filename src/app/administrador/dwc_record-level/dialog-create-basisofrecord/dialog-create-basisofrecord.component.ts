import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Basisofrecord } from 'src/app/services/dwc_record-level_services/basisofrecord.service';

@Component({
  selector: 'app-dialog-create-basisofrecord',
  templateUrl: './dialog-create-basisofrecord.component.html',
  styleUrls: ['./dialog-create-basisofrecord.component.css']
})
export class DialogCreateBasisofrecordComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateBasisofrecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Basisofrecord) {
      data.basisofrecord=null,
      data.description=null
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
