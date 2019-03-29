import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-read-ficha',
  templateUrl: './read-ficha.component.html',
  styleUrls: ['./read-ficha.component.css']
})

export class ReadFichaComponent implements OnInit {
  //title
  fichaTitle: string = "Taxonomía";
  //booleans
  taxonBool: boolean = true;
  recordlevelBool: boolean = false;
  occurrenceBool: boolean = false;
  organismBool: boolean = false;
  eventBool: boolean = false;
  locationBool: boolean = false;
  geologicalcontextBool: boolean = false;
  multimediaBool: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  identificationid = null;
  ngOnInit() {
    this.identificationid = this.route.snapshot.params['id'];
    if (!this.identificationid) return;
  }
  onClickTaxon() {
    this.fichaTitle = "Taxonomía";
    this.taxonBool = true;
    this.recordlevelBool = false;
    this.occurrenceBool = false;
    this.organismBool = false;
    this.eventBool = false;
    this.locationBool = false;
    this.geologicalcontextBool = false;
    this.multimediaBool = false;
  }
  onClickRecordlevel() {
    this.fichaTitle = "Record Level";
    this.taxonBool = false;
    this.recordlevelBool = true;
    this.occurrenceBool = false;
    this.organismBool = false;
    this.eventBool = false;
    this.locationBool = false;
    this.geologicalcontextBool = false;
    this.multimediaBool = false;
  }
  onClickOccurrence() {
    this.fichaTitle = "Occurrence";
    this.taxonBool = false;
    this.recordlevelBool = false;
    this.occurrenceBool = true;
    this.organismBool = false;
    this.eventBool = false;
    this.locationBool = false;
    this.geologicalcontextBool = false;
    this.multimediaBool = false;
  }
  onClickOrganism() {
    this.fichaTitle = "Organism";
    this.taxonBool = false;
    this.recordlevelBool = false;
    this.occurrenceBool = false;
    this.organismBool = true;
    this.eventBool = false;
    this.locationBool = false;
    this.geologicalcontextBool = false;
    this.multimediaBool = false;
  }
  onClickEvent() {
    this.fichaTitle = "Event";
    this.taxonBool = false;
    this.recordlevelBool = false;
    this.occurrenceBool = false;
    this.organismBool = false;
    this.eventBool = true;
    this.locationBool = false;
    this.geologicalcontextBool = false;
    this.multimediaBool = false;
  }
  onClickLocation() {
    this.fichaTitle = "Location";
    this.taxonBool = false;
    this.recordlevelBool = false;
    this.occurrenceBool = false;
    this.organismBool = false;
    this.eventBool = false;
    this.locationBool = true;
    this.geologicalcontextBool = false;
    this.multimediaBool = false;
  }
  onClickGeologicalContext() {
    this.fichaTitle = "Geological Context";
    this.taxonBool = false;
    this.recordlevelBool = false;
    this.occurrenceBool = false;
    this.organismBool = false;
    this.eventBool = false;
    this.locationBool = false;
    this.geologicalcontextBool = true;
    this.multimediaBool = false;
  }
  onClickMultimedia() {
    this.fichaTitle = "Multimedia";
    this.taxonBool = false;
    this.recordlevelBool = false;
    this.occurrenceBool = false;
    this.organismBool = false;
    this.eventBool = false;
    this.locationBool = false;
    this.geologicalcontextBool = false;
    this.multimediaBool = true;
  }
}
