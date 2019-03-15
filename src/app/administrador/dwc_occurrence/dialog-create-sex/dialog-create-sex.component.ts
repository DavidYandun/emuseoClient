import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Sex } from 'src/app/services/dwc_occurrence_services/occurrence.service';

@Component({
  selector: 'app-dialog-create-sex',
  templateUrl: './dialog-create-sex.component.html',
  styleUrls: ['./dialog-create-sex.component.css']
})
export class DialogCreateSexComponent{

  constructor(public dialogRef: MatDialogRef<DialogCreateSexComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sex) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
