import { Component, OnInit } from '@angular/core';
import { VerificationService } from 'src/app/services/dwc_identification_services/verification.service';

@Component({
  selector: 'app-create-verification',
  templateUrl: './create-verification.component.html',
  styleUrls: ['./create-verification.component.css']
})
export class CreateVerificationComponent implements OnInit {

  verification: any = {
    verificationstatus: '',
    description: ''
  }

  constructor(private verificationService: VerificationService) { }

  ngOnInit() {
  }
  postVerification() {
    this.verificationService.postVerification(this.verification).subscribe(resultado => {
      console.log(this.verification);
    },
      error => {
        console.log(JSON.stringify(error));

      });
  }
}
