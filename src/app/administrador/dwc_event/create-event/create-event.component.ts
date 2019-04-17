import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/dwc_event_services/event.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  @Input() identificationid: number;

  event = this.formBuilder.group({
    identificationid: [null],
    fieldnumber: [null, Validators.required],
    eventdate: [null, Validators.required],
    eventtime: [null],
    habitat: [null],
    samplingprotocol: [null],
    samplesizevalue: [null,Validators.min(0)],
    samplesizeunit: [null],
    fieldnotes: [null],
    eventremarks: [null]
  });

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  postEvent() {
    this.event.value.identificationid = this.identificationid;
    if (this.event.value.identificationid) {
      this.eventService.postEvent(this.event.value).subscribe(data => {
        this.openSnackBar('REGISTRO EVENT EXITOSO', '✅');
      },
        error => {
          this.openSnackBar(error.error.message, '🛑');
          console.log(JSON.stringify(error));
        });
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
