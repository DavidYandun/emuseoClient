import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Verification } from 'src/app/services/dwc_identification_services/verification.service';
import { otherUser } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent {
  File: File;
  extension: any;
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: otherUser) { 
      
    }
    
    onFileSelected(file: any) {
      this.File = file.target.files[0];
    
      
      if (this.File.name.substr(-3, 1) == '.') {
        this.extension = this.File.name.substr(-3);
      } else if (this.File.name.substr(-4, 1) == '.') {
        this.extension = this.File.name.substr(-4);
      } else {
        this.extension = this.File.name.substr(-5);
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
