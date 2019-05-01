import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  isLoggedIn(): Observable<isLoggedIn> {
    return this.httpClient.get<isLoggedIn>('/api/isLoggeIn')
  }

  getUsers(): Observable<any> {
    return this.httpClient.get("/api/users");
  }

  getUsersRol(): Observable<any> {
    return this.httpClient.get("/api/users/rol");
  }

  getUser(userid): Observable<any> {
    return this.httpClient.get('api/users/' + userid);
  }


  postUser(user: any) {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/users", json, { headers: headers });
  }

  putUser(userid: any, user: any) {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/users/' + userid, json, { headers: headers });
  }

  postFile(file: File, name: any): Observable<any> {

    let datos = new FormData();
    datos.append('file', file, file.name);
    datos.append('name', name);
    return this.httpClient.post('/api/users/upload', datos);

  }

  
}
export interface otherUser {
  userid: string,
  
  name: string,
  lastname: string,
  email: string,
  direction: string,
  phone: string,
  
  state: boolean,
  created_at: Date
}
export interface User {
  userid: string,
  rolid: number,
  name: string,
  lastname: string,
  email: string,
  direction: string,
  phone: string,
  password: string,
  state: boolean,
  created_at: Date
}


interface isLoggedIn {
  status: boolean
}