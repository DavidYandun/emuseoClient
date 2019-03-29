import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<any> {
    return this.httpClient.get('/api/location');
  }
  getLocation(locationid): Observable<any> {
    return this.httpClient.get<any>('api/location/' + locationid);
  }
  getLocationId(identificationid): Observable<any> {
    return this.httpClient.get<any>('api/location/id/' + identificationid);
  }
  postLocation(location: Location) {
    let json = JSON.stringify(location);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/location", json, { headers: headers });
  }
  putLocation(locationid: any, location: any) {
    let json = JSON.stringify(location);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/location/' + locationid, json, { headers: headers });
  }
  deleteLocation(eventid) {
    return this.httpClient.delete("/api/event", eventid);
  }

  ///divpolitica
  getCountrys(): Observable<any> {
    return this.httpClient.get('/api/country');
  }
  getStateprovinces(country): Observable<any> {
    return this.httpClient.get('/api/stateprovince/filter/' + country);
  }
  getCountys(stateprovince): Observable<any> {
    return this.httpClient.get('/api/county/filter/' + stateprovince);
  }
  getMunicipalitys(county): Observable<any> {
    return this.httpClient.get('/api/municipality/filter/' + county);
  }

  //varios
  getContinents(): Observable<any> {
    return this.httpClient.get('/api/continent');
  }
  getWaterbodys(): Observable<any> {
    return this.httpClient.get('/api/waterbody');
  }
  getIslands(): Observable<any> {
    return this.httpClient.get('/api/island');
  }
  getGeodeticdatums(): Observable<any> {
    return this.httpClient.get('/api/geodeticdatum');
  }
  getGeoreferenceverificationstatus(): Observable<any> {
    return this.httpClient.get('/api/georeferenceverificationstatus');
  }

  postCountry(country: Country) {
    let json = JSON.stringify(country);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/country", json, { headers: headers });
  }
  postStateProvince(stateprovince: Stateprovince) {
    let json = JSON.stringify(stateprovince);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/stateprovince", json, { headers: headers });
  }
  postCounty(county: County) {
    let json = JSON.stringify(county);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/county", json, { headers: headers });
  }
  postMunicipality(municipality: Municipality) {
    let json = JSON.stringify(municipality);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/municipality", json, { headers: headers });
  }
  postContinent(continent: Continent) {
    let json = JSON.stringify(continent);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/continent", json, { headers: headers });
  }
  postWaterBody(waterbody: Waterbody) {
    let json = JSON.stringify(waterbody);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/waterbody", json, { headers: headers });
  }
  postIsland(island: Island) {
    let json = JSON.stringify(island);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/island", json, { headers: headers });
  }
  postGeodeticdatum(geodeticdatum: Geodeticdatum) {
    let json = JSON.stringify(geodeticdatum);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/geodeticdatum", json, { headers: headers });
  }
  postGeoreferenceverificationstatus(georeferenceverificationstatus: Georeferenceverificationstatus) {
    let json = JSON.stringify(georeferenceverificationstatus);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/georeferenceverificationstatus", json, { headers: headers });
  }
}
export interface Location {
  locationid: number,
  identificationid: number,
  divpoliticaid: number,
  continent: string,
  waterbody: string,
  island: string,
  geodeticdatum: string,
  georeferenceverificationstatus: string,
  verbatimlocality: string,
  minimumelevationinmeters: any,
  maximumelevationinmeters: any,
  locationaccordingto: string,
  locationremarks: string,
  decimallatitude: any,
  decimallongitude: any,
  coordinateuncertaintyinmeters: any,
  coordinateprecision: any,
  georeferencedby: string,
  georeferenceddate: Date,
  georeferencesources: string,
  georeferenceremarks: string,
  country: string,
  stateprovince: string,
  county: string,
  municipality: string

}

export interface Country { country: string }
export interface Stateprovince { stateprovince: string, country: string }
export interface County { county: string, stateprovince: string }
export interface Municipality { municipality: string, county: string }
export interface Continent { continent: string }
export interface Waterbody { waterbody: string }
export interface Island { island: string }
export interface Geodeticdatum { geodeticdatum: string }
export interface Georeferenceverificationstatus { georeferenceverificationstatus: string }