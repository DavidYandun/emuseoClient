import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';
import { VerificationService } from 'src/app/services/dwc_identification_services/verification.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogCreateVerificationstatusComponent } from '../dialog-create-verificationstatus/dialog-create-verificationstatus.component';


@Component({
  selector: 'app-create-identification',
  templateUrl: './create-identification.component.html',
  styleUrls: ['./create-identification.component.css']
})


export class CreateIdentificationComponent implements OnInit {

  @Output() identificationid = new EventEmitter();

  identification = this.formBuilder.group({
    verificationstatus: ['', Validators.required],
    identificationqualifier: [''],
    identifiedby: ['', Validators.required],
    dateidentified: ['', Validators.required],
    identificationremarks: ['']
  });

  verifications: any;
  verificationstatus: any;
  constructor(
    private formBuilder: FormBuilder,
    private identificationService: IdentificationService,
    private verificationService: VerificationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getVerificationstatus();
  }
  postIdentification() {
    this.identificationService.postIdentification(this.identification.value).subscribe(resultado => {
      this.identificationid.emit(resultado.identificationid);
      this.openSnackBar('REGISTRO EXITOSO', '✅');
      console.log(resultado);
    },
      error => {
        this.openSnackBar(error.error.message, '🛑');
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
      this.verificationstatus = result;
      this.postVerificationStatus();
    });
  }

  postVerificationStatus() {
    this.verificationService.postVerification(this.verificationstatus).subscribe(data => {
      this.openSnackBar('Nueva Verificación Registrada', '✅');
    }, error => {
      console.log(JSON.stringify(error));
      this.openSnackBar(error.error.message, '🛑');
    });
    this.getVerificationstatus();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
