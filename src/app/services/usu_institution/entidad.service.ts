import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  constructor(private httpClient: HttpClient) { }

  getEntidads(): Observable<any> {
    return this.httpClient.get('/api/entidad');
  }
  getEntidad(entidadid): Observable<any> {
    return this.httpClient.get<any>('api/entidad/' + entidadid);
  }
  postEntidad(entidad: Entidad) {
    let json = JSON.stringify(entidad);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/entidad", json, { headers: headers });
  }
  putEntidad(entidadid: any, entidad: any) {
    let json = JSON.stringify(entidad);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/entidad/' + entidadid, json, { headers: headers });
  }
  deleteEntidad(entidadid) {
    return this.httpClient.delete("/api/entidad", entidadid);
  }
}
interface Entidad {
  entidadid: number,
  areaid: number,
  name: string,
  description: string
}
