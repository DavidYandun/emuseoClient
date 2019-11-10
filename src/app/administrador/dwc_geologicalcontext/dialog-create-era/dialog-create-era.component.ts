import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Era } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';

@Component({
  selector: 'app-dialog-create-era',
  templateUrl: './dialog-create-era.component.html',
  styleUrls: ['./dialog-create-era.component.css']
})
export class DialogCreateEraComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateEraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Era) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
