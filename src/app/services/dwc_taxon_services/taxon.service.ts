import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaxonService {

  constructor(private httpClient: HttpClient) { }
  /////Taxon
  getTaxons(): Observable<any> {
    return this.httpClient.get('/api/taxon');
  }
  getTaxon(taxonid): Observable<any> {
    return this.httpClient.get<any>('api/taxon/' + taxonid);
  }
  getTaxonId(identificationid): Observable<Taxon> {
    return this.httpClient.get<any>('api/taxon/id/' + identificationid);
  }
  postTaxon(taxon: Taxon) {
    let json = JSON.stringify(taxon);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/taxon", json, { headers: headers });
  }
  putTaxon(taxonid: any, taxon: any) {
    let json = JSON.stringify(taxon);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('api/taxon/' + taxonid, json, { headers: headers });
  }
  deleteTaxon(taxonid) {
    return this.httpClient.delete("/api/taxon", taxonid);
  }
  //kingdom
  getKingdoms(): Observable<any> {
    return this.httpClient.get('/api/kingdom');
  }

  //phylum
  getPhylums(dato): Observable<any> {
    return this.httpClient.get('/api/phylum/filter/' + dato);
  }
  postPhylum(phylum: Phylum) {
    let json = JSON.stringify(phylum);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/phylum", json, { headers: headers });
  }
  //class
  getClasses(dato): Observable<any> {
    return this.httpClient.get('/api/class/filter/' + dato);
  }
  postClass(classs: Class) {
    let json = JSON.stringify(classs);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/class", json, { headers: headers });
  }
  //order
  getOrders(dato): Observable<any> {
    return this.httpClient.get('/api/order/filter/' + dato);
  }
  postOrder(order: Order) {
    let json = JSON.stringify(order);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/order", json, { headers: headers });
  }
  //family
  getFamilys(dato): Observable<any> {
    return this.httpClient.get('/api/family/filter/' + dato);
  }
  postFamily(familiy: Family) {
    let json = JSON.stringify(familiy);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/family", json, { headers: headers });
  }
  //genus
  getGenuss(dato): Observable<any> {
    return this.httpClient.get('/api/genus/filter/' + dato);
  }
  postGenus(genus: Genus) {
    let json = JSON.stringify(genus);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/genus", json, { headers: headers });
  }

  //specie
  getSpecies(dato): Observable<any> {
    return this.httpClient.get('/api/specie/filter/' + dato);
  }
  postSpecie(specie: Specie) {
    let json = JSON.stringify(specie);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/specie", json, { headers: headers });
  }
  //taxonrank
  getTaxonRanks(): Observable<any> {
    return this.httpClient.get('/api/taxonrank');
  }
  postTaxonRank(taxonrank: TaxonRank) {
    let json = JSON.stringify(taxonrank);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/taxonrank", json, { headers: headers });
  }
  //taxonomicstatus
  getTaxonomicStatusTaxonomo(): Observable<any> {
    return this.httpClient.get('/api/taxonomicstatus/taxonomo');
  }
  getTaxonomicStatusUsuario(): Observable<any> {
    return this.httpClient.get('/api/taxonomicstatus/usuario');
  }
  postTaxonomicStatus(taxonomicstatus: TaxonomicStatus) {
    let json = JSON.stringify(taxonomicstatus);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/api/taxonomicstatus", json, { headers: headers });
  }
}
export interface Taxon {
  taxonid: number,
  identificationid: number,
  taxonrank: string,
  taxonomicstatus: string,
  scientificname: string,
  acceptednameusage: string,
  originalnameusage: string,
  vernacularname: string,
  taxonremarks: string,
  kingdom: string,
  phylum: string,
  class: string,
  order: string,
  family: string,
  genus: string,
  specie: string
}
export interface Phylum { kingdom: string, phylum: string }
export interface Class { phylum: string, class: string }
export interface Order { class: string, order: string }
export interface Family { order: string, family: string }
export interface Genus { family: string, genus: string }
export interface Specie { genus: string, specie: string }
export interface TaxonRank { taxonrank: string }
export interface TaxonomicStatus { taxonomicstatus: string }