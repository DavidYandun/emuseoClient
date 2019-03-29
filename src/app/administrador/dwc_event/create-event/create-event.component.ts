import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/dwc_event_services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  @Input() identificationid: number;
  event: any = {
    identificationid: null,
    fieldnumber: null,
    eventdate: null,
    eventtime: null,
    habitat: null,
    samplingprotocol: null,
    samplesizevalue: null,
    samplesizeunit: null,
    fieldnotes: null,
    eventremarks: null
  }

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }
  postEvent() {
    this.event.identificationid = this.identificationid;
    if (this.event.identificationid) {
      this.eventService.postEvent(this.event).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(JSON.stringify(error));
        });
    }
  }
}
