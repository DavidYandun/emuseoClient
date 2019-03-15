import { Component, Inject} from '@angular/core';
import { Epoch } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create-epoch',
  templateUrl: './dialog-create-epoch.component.html',
  styleUrls: ['./dialog-create-epoch.component.css']
})
export class DialogCreateEpochComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateEpochComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Epoch) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
