import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';
import { VerificationService } from 'src/app/services/dwc_identification_services/verification.service';
import { MatDialog } from '@angular/material';
import { DialogCreateVerificationstatusComponent } from '../dialog-create-verificationstatus/dialog-create-verificationstatus.component';

@Component({
  selector: 'app-create-identification',
  templateUrl: './create-identification.component.html',
  styleUrls: ['./create-identification.component.css']
})
export class CreateIdentificationComponent implements OnInit {

  @Output() identificationid = new EventEmitter();

  identification: any = {
    verificationstatus: null,
    identificationqualifier: null,
    identifiedby: null,
    dateidentified: null,
    identificationremarks: null
  }
  verifications: any;
  verificationstatus: any;
  constructor(private identificationService: IdentificationService,
    private verificationService: VerificationService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getVerificationstatus();
  }
  postIdentification() {
    this.identificationService.postIdentification(this.identification).subscribe(resultado => {
      this.identificationid.emit(resultado.identificationid);
      console.log(resultado);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  getVerificationstatus() {
    this.verificationService.getVerifications().subscribe(data => {
      this.verifications = data;
    },
      error => {
        console.log(JSON.stringify(error));
      })
  }

  addVerification(): void {
    const dialogRef = this.dialog.open(DialogCreateVerificationstatusComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.verificationstatus = result;
      this.postVerificationStatus();
    });
  }
  postVerificationStatus() {
    this.verificationService.postVerification(this.verificationstatus).subscribe(data => {
      console.log(this.verificationstatus);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getVerificationstatus();
  }
}
