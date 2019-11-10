import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Verification } from 'src/app/services/dwc_identification_services/verification.service';


@Component({
  selector: 'app-dialog-create-verificationstatus',
  templateUrl: './dialog-create-verificationstatus.component.html',
  styleUrls: ['./dialog-create-verificationstatus.component.css']
})
export class DialogCreateVerificationstatusComponent {
  constructor(public dialogRef: MatDialogRef<DialogCreateVerificationstatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Verification) { 
      data.verificationstatus=null;
      data.description='';
    }
    
  onNoClick(): void {
    this.dialogRef.close();
  }

}
