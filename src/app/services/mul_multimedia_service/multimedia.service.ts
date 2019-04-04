import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor(private httpClient: HttpClient) { }

  getMultimedias(): Observable<any> {
    return this.httpClient.get('/api/multimedia');
  }
  getMultimedia(multimediaid): Observable<any> {
    return this.httpClient.get<any>('api/multimedia/' + multimediaid);
  }

  getMultimediaId(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/multimedia/id/' + identificationid);
  }
  getMultimediaIdAll(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/multimedia/all/' + identificationid);
  }
  getImagen(name): Observable<any> {
    return this.httpClient.get<any>('api/multimedia/img/' + name);
  }
  postMultimedia(multimedia: Multimedia) {
    let json = JSON.stringify(multimedia);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/multimedia", json, { headers: headers });
  }
  putMultimedia(multimediaid: any, multimedia: any) {
    let json = JSON.stringify(multimedia);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/multimedia/' + multimediaid, json, { headers: headers });
  }
  deleteMultimedia(multimediaid) {
    return this.httpClient.delete("/api/multimedia", multimediaid);
  }

  getTypeMedias(): Observable<any> {
    return this.httpClient.get('/api/typemedia');
  }


  getMax(): Observable<any> {
    return this.httpClient.get('/api/multimedia/max');
  }

  postFile(file: File, name: any): Observable<any> {

    let datos = new FormData();
    datos.append('file', file, file.name);
    datos.append('name', name);
    return this.httpClient.post('/api/multimedia/upload', datos);

  }
}

export interface Multimedia {
  multimediaid: number,
  identificationid: number,
  typemedia: string,
  name: string,
  url: string,
  author: string
}
