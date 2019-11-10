import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LifeStage } from 'src/app/services/dwc_occurrence_services/occurrence.service';

@Component({
  selector: 'app-dialog-create-lifestage',
  templateUrl: './dialog-create-lifestage.component.html',
  styleUrls: ['./dialog-create-lifestage.component.css']
})
export class DialogCreateLifestageComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateLifestageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LifeStage) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
