import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeologicalcontextService {

  constructor(private httpClient: HttpClient) { }

  getGeologicalcontexts(): Observable<any> {
    return this.httpClient.get('/api/geologicalcontext');
  }
  getGeologicalcontext(geologicalcontextid): Observable<any> {
    return this.httpClient.get<any>('api/geologicalcontext/' + geologicalcontextid);
  }
  postGeologicalcontext(geologicalcontext: Geologicalcontext) {
    let json = JSON.stringify(geologicalcontext);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/geologicalcontext", json, { headers: headers });
  }
  putGeologicalcontext(geologicalcontextid: any, geologicalcontext: any) {
    let json = JSON.stringify(geologicalcontext);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/geologicalcontext/' + geologicalcontextid, json, { headers: headers });
  }
  deleteGeologicalcontext(geologicalcontextid) {
    return this.httpClient.delete("/api/geologicalcontext", geologicalcontextid);
  }
  getEons() {
    return this.httpClient.get('/api/eon');
  }
  getEras() {
    return this.httpClient.get('/api/era');
  }
  getPeriods() {
    return this.httpClient.get('/api/period');
  }
  getEpochs() {
    return this.httpClient.get('/api/epoch');
  }
  postEon(eon: Eon) {
    let json = JSON.stringify(eon);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/eon", json, { headers: headers });
  }
  postEra(era: Era) {
    let json = JSON.stringify(era);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/era", json, { headers: headers });
  }
  postPeriod(period: Period) {
    let json = JSON.stringify(period);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/period", json, { headers: headers });
  }
  postEpoch(epoch: Epoch) {
    let json = JSON.stringify(epoch);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/epoch", json, { headers: headers });
  }

}
export interface Geologicalcontext {
  geologicalcontextid: number,
  identificationid: number,
  earliesteonorlowesteonthem: string,
  latesteonorhighesteonthem: string,
  earliesteraorlowesterathem: string,
  latesteraorhighesterathem: string,
  earliestperiodorlowestperiodthem: string,
  latestperiodorhighestperiodthem: string,
  earliestepochorlowestepochthem: string,
  latestepochorhighestepochthem: string,
  geologicalcontextremarks: string
}
export interface Eon { name: string }
export interface Era { name: string }
export interface Period { name: string }
export interface Epoch { name: string }