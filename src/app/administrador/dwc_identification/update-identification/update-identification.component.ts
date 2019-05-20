import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';
import { VerificationService } from 'src/app/services/dwc_identification_services/verification.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogCreateVerificationstatusComponent } from '../dialog-create-verificationstatus/dialog-create-verificationstatus.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-identification',
  templateUrl: './update-identification.component.html',
  styleUrls: ['./update-identification.component.css']
})


export class UpdateIdentificationComponent implements OnInit {

  @Input() identificationid: number;

  identification = new FormGroup({
    verificationstatus: new FormControl(null),
    identificationqualifier: new FormControl(null),
    identifiedby: new FormControl(null),
    dateidentified: new FormControl(null),
    identificationremarks: new FormControl(null),
  });

  verifications: any;
  verificationstatus: any;
  constructor(
    private formBuilder: FormBuilder,
    private identificationService: IdentificationService,
    private verificationService: VerificationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.identificationService.getIdentification(this.route.snapshot.params['identificationid']).subscribe(data => {
      if (this.identification) {
        this.identification = new FormGroup({
          identificationid: new FormControl(data.identificationid),
          verificationstatus: new FormControl(data.verificationstatus),
          identificationqualifier: new FormControl(data.identificationqualifier),
          identifiedby: new FormControl(data.identifiedby),
          dateidentified: new FormControl(data.dateidentified),
          identificationremarks: new FormControl(data.identificationremarks),
        });
      }
    })
    this.getVerificationstatus();
  }
  updateIdentification() {
    this.identificationService.putIdentification(this.identification.value.identificationid, this.identification.value).subscribe(resultado => {
      this.openSnackBar('ACTUALIZACIÓN EXITOSO', '✅');
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
