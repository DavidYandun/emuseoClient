import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordLevelService {

  constructor(private httpClient: HttpClient) { }

  getRecordLevels(): Observable<any> {
    return this.httpClient.get('/api/recordlevel');
  }
  getRecordLevel(recordlevelid): Observable<any> {
    return this.httpClient.get<any>('api/recordlevel/' + recordlevelid);
  }
  getRecordLevelId(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/recordlevel/id/' + identificationid);
  }
  postRecordLevel(recordlevel: RecordLevel) {
    let json = JSON.stringify(recordlevel);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/recordlevel", json, { headers: headers });
  }
  putRecordLevel(recordlevelid: any, recordlevel: any) {
    let json = JSON.stringify(recordlevel);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/recordlevel/' + recordlevelid, json, { headers: headers });
  }
  deleteRecordLevel(recordlevelid) {
    return this.httpClient.delete("/api/recordlevel", recordlevelid);
  }
}
interface RecordLevel {
  recordlevelid: number,
  identificationid: number,
  entidadid: number,
  type: string,
  modified: Date,
  language: string,
  license: string,
  rightsholder: string,
  accessrights: string,
  bibliographiccitation: string,
  references: string,
  basisofrecord: string,
  dynamicproperties: string
}
