import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReproductiveCondition } from 'src/app/services/dwc_occurrence_services/occurrence.service';

@Component({
  selector: 'app-dialog-create-reproductivecondition',
  templateUrl: './dialog-create-reproductivecondition.component.html',
  styleUrls: ['./dialog-create-reproductivecondition.component.css']
})
export class DialogCreateReproductiveconditionComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateReproductiveconditionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReproductiveCondition) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
