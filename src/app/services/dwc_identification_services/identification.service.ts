import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {

  constructor(private httpClient: HttpClient) { }

  getIdentifications(): Observable<any> {
    return this.httpClient.get('/api/identifications');
  }
  getIdentification(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/identifications/' + identificationid);
  }
  postIdentification(identification: Identification) {
    let json = JSON.stringify(identification);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/identifications", json, { headers: headers });
  }
  putIdentification(identificationid: any, identification: any) {
    let json = JSON.stringify(identification);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/identifications/' + identificationid, json, { headers: headers });
  }
  deleteIdentification(identificationid) {
    return this.httpClient.delete("/api/identifications", identificationid);
  }
  getCollection(): Observable<any>{
    return this.httpClient.get('/api/identifications/collection');
  }
}

interface Identification {
  identificationid: number,
  verificationstatus: string,
  identificationqualifier: string,
  identifiedby: string,
  dateidentified: Date,
  identificationremarks: string
}
