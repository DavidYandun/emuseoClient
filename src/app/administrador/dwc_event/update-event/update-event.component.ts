import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/dwc_event_services/event.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  @Input() identificationid: number;

  event = new FormGroup({
    identificationid: new FormControl(null),
    fieldnumber: new FormControl(null),
    eventdate: new FormControl(null),
    eventtime: new FormControl(null),
    habitat: new FormControl(null),
    samplingprotocol: new FormControl(null),
    samplesizevalue: new FormControl(null),
    samplesizeunit: new FormControl(null),
    fieldnotes: new FormControl(null),
    eventremarks: new FormControl(null),
  });

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.eventService.getEventId(this.route.snapshot.params['identificationid']).subscribe(data => {
      if (this.event) {
        this.event = new FormGroup({
          eventid: new FormControl(data.eventid),
          identificationid: new FormControl(data.identificationid),
          fieldnumber: new FormControl(data.fieldnumber),
          eventdate: new FormControl(data.eventdate),
          eventtime: new FormControl(data.eventtime),
          habitat: new FormControl(data.habitat),
          samplingprotocol: new FormControl(data.samplingprotocol),
          samplesizevalue: new FormControl(data.samplesizevalue),
          samplesizeunit: new FormControl(data.samplesizeunit),
          fieldnotes: new FormControl(data.fieldnotes),
          eventremarks: new FormControl(data.eventremarks),
        });
      }
    })
  }
  updateEvent() {
    if (this.event.value.identificationid) {
      this.eventService.putEvent(this.event.value.eventid, this.event.value).subscribe(data => {
        this.openSnackBar('ACTUALIZACIÓN DE EVENTO EXITOSO', '✅');
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
