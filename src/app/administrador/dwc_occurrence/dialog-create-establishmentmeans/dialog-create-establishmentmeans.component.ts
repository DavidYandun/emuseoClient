import { Component, Inject} from '@angular/core';
import { Establishmentmeans } from 'src/app/services/dwc_occurrence_services/occurrence.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create-establishmentmeans',
  templateUrl: './dialog-create-establishmentmeans.component.html',
  styleUrls: ['./dialog-create-establishmentmeans.component.css']
})
export class DialogCreateEstablishmentmeansComponent{

  constructor(public dialogRef: MatDialogRef<DialogCreateEstablishmentmeansComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Establishmentmeans) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
