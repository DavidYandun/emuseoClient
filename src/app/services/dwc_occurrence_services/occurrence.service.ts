import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OccurrenceService {

  constructor(private httpClient: HttpClient) { }

  getOccurrences(): Observable<any> {
    return this.httpClient.get('/api/occurrence');
  }
  getOccurrence(occurrenceid): Observable<any> {
    return this.httpClient.get<any>('api/occurrence/' + occurrenceid);
  }
  getOccurrenceId(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/occurrence/id/' + identificationid);
  }
  postOccurrence(occurrence: Occurrence) {
    let json = JSON.stringify(occurrence);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/occurrence", json, { headers: headers });
  }
  putOccurrence(occurrenceid: any, occurrence: any) {
    let json = JSON.stringify(occurrence);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/occurrence/' + occurrenceid, json, { headers: headers });
  }
  deleteOccurrence(occurrenceid) {
    return this.httpClient.delete("/api/occurrence", occurrenceid);
  }

 
  getLifeStages():Observable<any>{
    return this.httpClient.get('/api/lifestage');
  }
  getReproductiveConditions():Observable<any>{
    return this.httpClient.get('/api/reproductivecondition');
  }
  getSex():Observable<any>{
    return this.httpClient.get('/api/sex');
  }
  getEstablishmentmeans():Observable<any>{
    return this.httpClient.get('/api/establishmentmeans');
  }
  getOrganismquantitytypes(): Observable<any> {
    return this.httpClient.get('/api/organismquantitytype');
  }
  
  postLifeStage(lifestage: LifeStage) {
    let json = JSON.stringify(lifestage);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/lifestage", json, { headers: headers });
  }
  postReproductiveCondition(reproductivecondition: ReproductiveCondition) {
    let json = JSON.stringify(reproductivecondition);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/reproductivecondition", json, { headers: headers });
  }
  postSex(sex: Sex) {
    let json = JSON.stringify(sex);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/sex", json, { headers: headers });
  }
  postEstablishmentmeans(establishmentmeans: Establishmentmeans) {
    let json = JSON.stringify(establishmentmeans);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/establishmentmeans", json, { headers: headers });
  }
  postOrganismQuantityType(organismquantitytype: Organismquantitytype) {
    let json = JSON.stringify(organismquantitytype);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/organismquantitytype", json, { headers: headers });
  }
}

export interface Occurrence {
  occurrenceid: number,
  identificationid: number,
  organismquantitytype: string,
  lifestage: string,
  reproductivecondition: string,
  sex: string,
  establishmentmeans: string,
  recordnumber: string,
  individualcount: number,
  organismquantity: any,
  behavior: string,
  preparations: string,
  associatedreferences: string,
  occurrenceremarks: string
}
export interface LifeStage{ sex:string }
export interface ReproductiveCondition{ reproductivecondition:string }
export interface Sex{ sex:string }
export interface Establishmentmeans{ establishmentmeans:string }
export interface Organismquantitytype{ organismquantitytype:string }