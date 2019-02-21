import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
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


interface isLoggeIn {
  status: boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get("/api/users");
  }

  getUsersRol(): Observable<any> {
    return this.httpClient.get("/api/users/rol");
  }

  getUser(user): Observable<any> {
    return this.httpClient.get('api/users/:$user.userid');
  }


  postUser(user: any) {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/users", json, { headers: headers });
  }

  isLoggedIn(): Observable<isLoggeIn> {
    return this.httpClient.get<isLoggeIn>('/api/isLoggeIn')
  }

}
