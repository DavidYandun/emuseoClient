import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {

  constructor(private httpClient: HttpClient) { }
errorHandler(error:HttpErrorResponse){
  return observableThrowError("Error "+error.status+" "+error.statusText+" :("||'Error Server :(');
}
  getIdentifications():Observable<any> {
    return this.httpClient.get('/api/identifications').pipe(
      catchError(this.errorHandler));
  }
  getIdentification(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/identifications/' + identificationid);
  }
  postIdentification (identification: Identification):Observable<any> {
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
    return this.httpClient.get('/api/identifications/collection').pipe(
      catchError(this.errorHandler));
  }

  getReinos(kingdom){
    return this.httpClient.get('/api/identifications/collection/'+kingdom).pipe(
      catchError(this.errorHandler));;
  }
}

export interface Identification {
  identificationid: number,
  verificationstatus: string,
  identificationqualifier: string,
  identifiedby: string,
  dateidentified: Date,
  identificationremarks: string
}
