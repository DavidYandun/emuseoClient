import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/dwc_event_services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
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
    this.eventService.postEvent(this.event).subscribe(resultado => {
      console.log(this.event);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
