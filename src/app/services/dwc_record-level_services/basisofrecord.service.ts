import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasisofrecordService {

  constructor(private httpClient: HttpClient) { }
  getBasisofrecords(): Observable<any> {
    return this.httpClient.get('/api/basisofrecord');
  }
  getBasisofrecord(basisofrecord): Observable<any> {
    return this.httpClient.get<any>('api/basisofrecord/' + basisofrecord);
  }
  postBasisofrecord(Basisofrecord: Basisofrecord) {
    let json = JSON.stringify(Basisofrecord);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/basisofrecord", json, { headers: headers });
  }
  putBasisofrecord(basisofrecord: any, Basisofrecord: any) {
    let json = JSON.stringify(Basisofrecord);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/basisofrecord/' + basisofrecord, json, { headers: headers });
  }
  deleteBasisofrecord(basisofrecord) {
    return this.httpClient.delete("/api/basisofrecord", basisofrecord);
  }
}

export interface Basisofrecord {
  basisofrecord: string,
  description: string
}