import { Component, OnInit } from '@angular/core';
import { VerificationService } from 'src/app/services/dwc_identification_services/verification.service';
@Component({
  selector: 'app-read-verification',
  templateUrl: './read-verification.component.html',
  styleUrls: ['./read-verification.component.css']
})
export class ReadVerificationComponent implements OnInit {

  constructor(private verificationService: VerificationService) { }
  verifications: any;
  ngOnInit() {
    this.getVerification();
  }
  getVerification() {
    this.verificationService.getVerifications().subscribe(data => {
      this.verifications = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
