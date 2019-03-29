import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrganismService {

  constructor(private httpClient: HttpClient) { }

  getOrganisms(): Observable<any> {
    return this.httpClient.get('/api/organism');
  }
  getOrganism(organismid): Observable<any> {
    return this.httpClient.get<any>('api/organism/' + organismid);
  }
  getOrganismId(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/organism/id/' + identificationid);
  }
  postOrganism(organism: Organism) {
    let json = JSON.stringify(organism);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/organism", json, { headers: headers });
  }
  putOrganism(organismid: any, organism: any) {
    let json = JSON.stringify(organism);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/organism/' + organismid, json, { headers: headers });
  }
  deleteOrganism(organismid) {
    return this.httpClient.delete("/api/organism", organismid);
  }
}
interface Organism {
  organismid: number,
  identificationid: number,
  organismname: string,
  organismscope: string,
  organismremarks: string
}