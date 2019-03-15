import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private httpClient: HttpClient) { }

  getRols(): Observable<any> {
    return this.httpClient.get("/api/rols");
  }
}
