import { Component, Inject } from '@angular/core';
import { Order } from 'src/app/services/dwc_taxon_services/taxon.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-order',
  templateUrl: './dialog-create-order.component.html',
  styleUrls: ['./dialog-create-order.component.css']
})
export class DialogCreateOrderComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order) { 
      
      data.order=null;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
