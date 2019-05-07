import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //prvate loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  private loggedInStatus = false;
  constructor(private httpClient: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    sessionStorage.setItem('loggedin', 'true');

  }

  get isLoggedIn() {
    //  return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
    return this.loggedInStatus;
  }

  getUserDetails(user: any) {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const login = this.httpClient.post<myData>('/auth/login', json, { headers: headers });
    return login;
  };

  logout() {
    sessionStorage.removeItem('loggedin');
    sessionStorage.removeItem('email');
    return this.httpClient.get('/auth/logout');

  }
}
