import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class VerificationService {


  constructor(private httpClient: HttpClient) { }

  getVerifications(): Observable<any> {
    return this.httpClient.get('/api/verifications');
  }
  getVerificationsTaxonomo(): Observable<any> {
    return this.httpClient.get('/api/verifications');
  }
  getVerificationsCurador(): Observable<any> {
    return this.httpClient.get('/api/verifications/curador');
  }
  getVerificationsDigitador(): Observable<any> {
    return this.httpClient.get('/api/verifications/digitador');
  }


  getVerification(verificationstatus): Observable<Verification> {
    return this.httpClient.get<Verification>('api/verifications/' + verificationstatus);
  }

  postVerification(verification: any) {
    let json = JSON.stringify(verification);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/verifications", json, { headers: headers });
  }

  putVerification(verificationstatus: any, verification: any) {
    let json = JSON.stringify(verification);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/verifications/' + verificationstatus, json, { headers: headers });
  }
  deleteVerification(verificationstatus) {
    return this.httpClient.delete("/api/verifications", verificationstatus);
  }
}

export interface Verification {
  verificationstatus: string,
  description: string
}