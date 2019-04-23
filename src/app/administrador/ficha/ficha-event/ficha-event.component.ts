import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/dwc_event_services/event.service';

@Component({
  selector: 'app-ficha-event',
  templateUrl: './ficha-event.component.html',
  styleUrls: ['./ficha-event.component.css']
})
export class FichaEventComponent implements OnInit {
  @Input() identificationid:any;
  event:any;
  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.getEvent();
  }
  getEvent() {
    this.eventService.getEventId(this.identificationid).subscribe(data => {
      this.event = data;
      console.log(data);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
