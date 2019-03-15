import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VerificationService } from 'src/app/services/dwc_identification_services/verification.service';

@Component({
  selector: 'app-update-verification',
  templateUrl: './update-verification.component.html',
  styleUrls: ['./update-verification.component.css']
})
export class UpdateVerificationComponent implements OnInit {

  @Input() verification: any = {
    verificationstatus: '',
    description: ''
  }
  @Output() cerrar = new EventEmitter();
  constructor(private verificationService: VerificationService) { }

  ngOnInit() {
  }

  putVerification() {
    this.verificationService.putVerification(this.verification.verificationstatus, this.verification).subscribe(data => {
      this.cerrar.emit();
      console.log("modificación correcta");

    });
  }

}
