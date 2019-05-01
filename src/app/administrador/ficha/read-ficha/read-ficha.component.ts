import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-read-ficha',
  templateUrl: './read-ficha.component.html',
  styleUrls: ['./read-ficha.component.css']
})

export class ReadFichaComponent implements OnInit {
  
  mobileQuery: MediaQueryList;

  identificationid = null;
  image: any;
  //title
  fichaTitle1: string;
  fichaTitle2: string = "Taxonomía";
  //booleans
  taxonBool: boolean = true;
  recordlevelBool: boolean = false;
  occurrenceBool: boolean = false;
  organismBool: boolean = false;
  eventBool: boolean = false;
  locationBool: boolean = false;
  geologicalcontextBool: boolean = false;
  multimediaBool: boolean = false;

  private _mobileQueryListener: () => void;
  constructor(
    private multimediaService: MultimediaService,
    private taxonService: TaxonService,
    private route: ActivatedRoute,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.identificationid = this.route.snapshot.params['id'];
    
    this.taxonService.getTaxonId(this.identificationid).subscribe(data => {
      this.fichaTitle1 = data.scientificname;
    })
    this.multimediaService.getMultimediaId(this.identificationid).subscribe(data => {
      this.image = data.url;
    })
  }
  onClickTaxon() {
    this.fichaTitle2 = "Taxonomía";
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
    this.fichaTitle2 = "Nivel de Registro";
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
    this.fichaTitle2 = "Ocurrencia";
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
    this.fichaTitle2 = "Organismo";
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
    this.fichaTitle2 = "Evento";
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
    this.fichaTitle2 = "Ubicación";
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
    this.fichaTitle2 = "Contexto Geológico";
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
    this.fichaTitle2 = "Multimedia";
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
