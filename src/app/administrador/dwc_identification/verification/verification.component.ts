import { Component, OnInit, Input } from '@angular/core';
import { VerificationService } from 'src/app/services/dwc_identification_services/verification.service';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  @Input() verification: any;
  constructor(private verificationService: VerificationService) { }

  ngOnInit() {

  }
  getVerification(verification) {
    this.verificationService.getVerification(verification.verificationstatus).subscribe(data => {
      this.verification = data;
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  selectVerification(verificationstatus) {
    this.verificationService.getVerification(verificationstatus).subscribe(data => {
      this.verification = data;
    });
  }


}
