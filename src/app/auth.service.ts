import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  /*getUserDetails(user){
    return this.httpClient.post('/auth/login',{user}).subscribe(data=>{
      console.log(data,"is what we  got from the server");   
    })
  };*/


  getUserDetails(user: any) {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const prueba = this.httpClient.post('/auth/login', json, { headers: headers });
    //.catch(this.errorHandler);
    console.log(json);
    return prueba;
  };

 
  agregarPersona(persona: any) {
    let json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/personas", json, { headers: headers });
  }
}
