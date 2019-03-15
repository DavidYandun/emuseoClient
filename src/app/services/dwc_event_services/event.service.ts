import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<any> {
    return this.httpClient.get('/api/event');
  }
  getEvent(eventid): Observable<any> {
    return this.httpClient.get<any>('api/event/' + eventid);
  }
  postEvent(event: Event) {
    let json = JSON.stringify(event);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/event", json, { headers: headers });
  }
  putEvent(eventid: any, event: any) {
    let json = JSON.stringify(event);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/event/' + eventid, json, { headers: headers });
  }
  deleteEvent(eventid) {
    return this.httpClient.delete("/api/event", eventid);
  }
}
interface Event {
  eventid: number,
  identificationid: number,
  fieldnumber: string,
  eventdate: Date,
  eventtime: Time,
  habitat: string,
  samplingprotocol: string,
  samplesizevalue: any,
  samplesizeunit: string,
  fieldnotes: string,
  eventremarks: string
}