import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Organismquantitytype } from 'src/app/services/dwc_occurrence_services/occurrence.service';

@Component({
  selector: 'app-dialog-create-organismquantitytype',
  templateUrl: './dialog-create-organismquantitytype.component.html',
  styleUrls: ['./dialog-create-organismquantitytype.component.css']
})
export class DialogCreateOrganismquantitytypeComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateOrganismquantitytypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Organismquantitytype) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
