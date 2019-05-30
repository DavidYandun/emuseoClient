import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';
import { RecordLevelService } from 'src/app/services/dwc_record-level_services/record-level.service';
import { OrganismService, Organism } from 'src/app/services/dwc_organism_services/organism.service';
import { OccurrenceService } from 'src/app/services/dwc_occurrence_services/occurrence.service';
import { LocationService } from 'src/app/services/dwc_location_services/location.service';
import { EventService } from 'src/app/services/dwc_event_services/event.service';
import { GeologicalcontextService } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';

declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-read-ficha',
  templateUrl: './read-ficha.component.html',
  styleUrls: ['./read-ficha.component.css']
})

export class ReadFichaComponent implements OnInit {
  loggedin = false;
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
  //servicios
  identification: any;
  recordlevel: any;
  taxon: any;
  organism: any;
  occurrence: any;
  location: any;
  event: any;
  geologicalcontext: any;


  private _mobileQueryListener: () => void;
  constructor(
    private multimediaService: MultimediaService,
    private identificationService: IdentificationService,
    private recordlevelService: RecordLevelService,
    private taxonService: TaxonService,
    private organismService: OrganismService,
    private occurrenceService: OccurrenceService,
    private locationService: LocationService,
    private eventService: EventService,
    private geologicalcontextService: GeologicalcontextService,
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
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }

    this.identificationid = this.route.snapshot.params['id'];

    this.taxonService.getTaxonId(this.identificationid).subscribe(data => {
      this.fichaTitle1 = data.scientificname;
    })
    this.multimediaService.getPrincipal(this.identificationid).subscribe(data => {
      this.image = data.url;
    })
    //consulta de datos
    this.identificationService.getIdentification(this.identificationid).subscribe(data => {
      this.identification = data;
    }, error => {
      this.identification = {
        identificationid: null, verificationstatus: null, identificationqualifier: null, identifiedby: null, dateidentified: null, identificationremarks: null,
      }
    })
    this.recordlevelService.getRecordLevelId(this.identificationid).subscribe(data => {
      this.recordlevel = data;
    }, error => {
      this.recordlevel = { recordlevelid: null, identificationid: null, entidadid: null, type: null, modified: null, language: null, license: null, rightsholder: null, accessrights: null, bibliographiccitation: null, references: null, basisofrecord: null, dynamicproperties: null, }
    })
    this.taxonService.getTaxonId(this.identificationid).subscribe(data => {
      this.taxon = data;
    }, error => {
      this.taxon = { taxonid: null, identificationid: null, taxonrank: null, taxonomicstatus: null, scientificname: null, acceptednameusage: null, originalnameusage: null, vernacularname: null, taxonremarks: null, kingdom: null, phylum: null, class: null, order: null, family: null, genus: null, specie: null, }
    })
    this.organismService.getOrganismId(this.identificationid).subscribe(data => {
      this.organism = data;
    }, error => {
      this.organism = {
        organismid: null, identificationid: null, organismname: '', organismscope: '', organismremarks: ''
      }
    })
    this.occurrenceService.getOccurrenceId(this.identificationid).subscribe(data => {
      this.occurrence = data;
    }, error => {
      this.occurrence = {
        occurrenceid: null, identificationid: null, organismquantitytype: null, lifestage: null, reproductivecondition: null, sex: null, establishmentmeans: null, recordnumber: null, individualcount: null, organismquantity: null, behavior: null, preparations: null, associatedreferences: null, occurrenceremarks: null
      }
    })
    this.locationService.getLocationId(this.identificationid).subscribe(data => {
      this.location = data;
    }, error => {
      this.location = { locationid: null, identificationid: null, continent: null, waterbody: null, island: null, geodeticdatum: null, georeferenceverificationstatus: null, verbatimlocality: null, minimumelevationinmeters: null, maximumelevationinmeters: null, locationaccordingto: null, locationremarks: null, decimallatitude: null, decimallongitude: null, coordinateuncertaintyinmeters: null, coordinateprecision: null, georeferencedby: null, georeferenceddate: null, georeferencesources: null, georeferenceremarks: null, country: null, stateprovince: null, county: null, municipality: null, }
    })
    this.eventService.getEventId(this.identificationid).subscribe(data => {
      this.event = data;
    }, error => {
      this.event = { eventid: null, identificationid: null, fieldnumber: null, eventdate: null, eventtime: null, habitat: null, samplingprotocol: null, samplesizevalue: null, samplesizeunit: null, fieldnotes: null, eventremarks: null, }
    })
    this.geologicalcontextService.getGeologicalcontextId(this.identificationid).subscribe(data => {
      this.geologicalcontext = data;
    }, error => {
      this.geologicalcontext = { geologicalcontextid: null, identificationid: null, earliesteonorlowesteonthem: null, latesteonorhighesteonthem: null, earliesteraorlowesterathem: null, latesteraorhighesterathem: null, earliestperiodorlowestperiodthem: null, latestperiodorhighestperiodthem: null, earliestepochorlowestepochthem: null, latestepochorhighestepochthem: null, geologicalcontextremarks: null, }
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

  reportePDF() {

    var doc = new jsPDF();
    //encabezado
    var logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAABsCAYAAABwzedDAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBtJREFUeNrs3U2O0zAYBuBplC1LrjV3YRAcAgkOM9ea5RygqEJFBaUdx7Gdz87zbGBTN7a/vHH+Oqfz+fx08frp85//ACx4fn87Xf6dDAWwhtAAhAYgNAChAQgNQGgACA1AaABCAxAagNAAhAaA0ACEBiA0gOBO1x/hoW89/IjS9UdcsNIAhAaA0ACEBiA0AKEBjGO+/qfHv3uy5Rbe0fobXW/zsXUueq4/Kw04yE7v9AQEh9AAwSE0QHAIDeDIwSE0QHAIDRAcQgMEh9AAwSE0gOGDQ2iA4BAaIDiEBggOoQGCQ2gAwweH0ADBITQAoQEIDUBoAEIDQGgAQgMQGoDQiOHIf7MChAYgNKwYQGiECQ5BA05PkoNAYIDQSA4EgQFlzCN15jYYnt/fToKCmo5aY8PePREYtAoOoQEIDqEBgkNogOAQGiA4hAYIDqEBHDk4hAYgNMBqQ2iA4BAaIDiEBgqP4edvUpQgOKw0FBvmsk1oKE5FhjldvdJQpIoLHpk/Kla/SyEoqDPPve5bp/NZJgAbTk8AhAYgNAChAQgNQGgAQgNAaABCAxAagNAAhAaA0ABynF6+fPvnNdefv378fTX768v3rFdgb9tIsfQ9H7VRetta9DWnn63ljsNHfUlpd83nU8Zt7WfubWPpWsyZ863jV7LG55qFlzOxrXaKUjvr1vYun48WHHuFUOm56WFMSu7otcbv/3anKAXT0xE1p73IYxFtjI80Vo/6GnX8ptEGjDFCea8V6B7bstR+xPG7trn69GTreWtNpbetVV8jn6KU3q6l9kY8QNTqZ+l2c2o89N2TksXUovitmh73996YjX4N47afKRfic8avZRhPIwSC5XyfR94oK5CU79n7ALZHsN77zilSUR3piHOkQOytv73WYqvgLXLLde2Grb2NVGICW98tSVlq9rC6SN3G6xzVOr+OsMIree1pzfzvFWD3tm+uOcitO7tXMJTaMUZ/ZoN4p6k53xfi9OR2R2m107grQJRa7G1s5ppfsnTkzNmRRj0CLy1R1/a1xOPFjupqseo1jbX3dVMGeY8jcunJT22vt9XH0XaQCM8aRa2Ra43PvXQ4Zads9TJa61t0va+etuywtUJry/yUOOBEqY+cGm96TWOvgdrzwa6eC2rv/mwZ55HGcMudutwxfPS5+ekgSq+CHrXXsmBHOX3IuW3fa997CbR7NT7vOVBrr3X0XCiR39lpeT7cov85bxy3qsWUR8RzLpC3rKGqz2mQn+hRAjLnuZx7R6il33vI/eGbte2NsJpY299a9TO32CFaHbGiFssRb9GVPn3b2l7kOVjatsj9nVoMRu6O1NsFxx6eSI1ySpbzuRLtlazFWq+61xq/UjU5RSuYI5+i6Ffe27A9jmvqS3ER+/tbgAEAt6INWG3o9zkAAAAASUVORK5CYII=';
    doc.rect(5, 5, 200, 20);
    doc.setFont("helvetica");
    doc.setFontStyle("bold");
    doc.setFontSize(18);
    doc.text('Universidad Técnica del Norte', 105, 15, 'center');
    doc.addImage(logo, 'JPEG', 15, 8, 25, 14);
    //titulo
    doc.setFontSize(22);
    doc.text('Reporte de Colección', 10, 35)
    //id coleccion
    doc.rect(150, 30, 50, 8)
    doc.setFontStyle("")
    doc.setFontSize(12)
    doc.text('Colección # ' + this.identificationid, 152, 35)
    //titles
    doc.setFontSize(18)
    doc.text('Identificación', 30, 44)
    doc.text('Nivel de Registro', 30, 65)
    doc.text('Taxón', 30, 100)
    doc.text('Organismo', 140, 100)
    doc.text('Ocurrencia', 30, 139)
    doc.text('Ubicación', 30, 172)
    doc.text('Evento', 120, 172)
    doc.text('Contexto Geológico', 120, 216)

    //identificacion
    doc.rect(26, 46, 170, 12)
    //titulos
    doc.setFontSize(9)
    doc.setFontStyle("bold");
    doc.text('Identificado por:', 65, 50, 'right')
    doc.text('Indice:', 65, 55, 'right')
    doc.text('Fecha de Registro:', 144, 50, 'right')
    doc.text('Estado:', 144, 55, 'right')
    //contenidos
    doc.setFontStyle("");
    doc.text('' + this.identification.identifiedby, 70, 50)
    doc.text('' + this.identification.identificationqualifier, 70, 55)
    doc.text('' + this.identification.dateidentified, 145, 50)
    doc.text('' + this.identification.verificationstatus, 145, 55)

    //Nivel de Registro
    doc.rect(26, 67, 170, 25)
    //titulos
    doc.setFontStyle("bold");
    doc.text('Bases de Registro:', 65, 70, 'right')
    doc.text('Tipo:', 65, 75, 'right')
    doc.text('Modificado:', 65, 80, 'right')
    doc.text('Lenguaje:', 65, 85, 'right')
    doc.text('Licencia:', 65, 90, 'right')
    doc.text('Titular de Derechos:', 145, 70, 'right')
    doc.text('Derechos de Acceso:', 145, 75, 'right')
    doc.text('Citas Bibliográficas:', 145, 80, 'right')
    doc.text('Referencias:', 145, 85, 'right')
    doc.text('Propiedades Dinámicas:', 145, 90, 'right')
    //contenido
    doc.setFontStyle("");
    doc.text('' + this.recordlevel.basisofrecord, 66, 70, '')
    doc.text('' + this.recordlevel.type, 66, 75, '')
    doc.text('' + this.recordlevel.modified, 66, 80, '')
    doc.text('' + this.recordlevel.language, 66, 85, '')
    doc.text('' + this.recordlevel.license, 66, 90, '')
    doc.text('' + this.recordlevel.rightsholder, 146, 70, '')
    doc.text('' + this.recordlevel.accessrights, 146, 75, '')
    doc.text('' + this.recordlevel.bibliographiccitation, 146, 80, '')
    doc.text('' + this.recordlevel.references, 146, 85, '')
    doc.text('' + this.recordlevel.dynamicproperties, 146, 90, '')

    //Taxon
    doc.rect(26, 101, 105, 30)
    //titulos
    doc.setFontStyle("bold");
    doc.text('Reino:', 40, 105, 'right')
    doc.text('Filo:', 40, 110, 'right')
    doc.text('Clase:', 40, 115, 'right')
    doc.text('Orden:', 40, 120, 'right')
    doc.text('Familia:', 40, 125, 'right')
    doc.text('Especie:', 40, 130, 'right')
    doc.text('Nombre Científico:', 95, 105, 'right')
    doc.text('Nombre Aceptado:', 95, 110, 'right')
    doc.text('Nombre Común:', 95, 115, 'right')
    doc.text('Nombre Original:', 95, 120, 'right')
    //contenido
    doc.setFontStyle("");
    doc.text('' + this.taxon.kingdom, 41, 105, '')
    doc.text('' + this.taxon.phylum, 41, 110, '')
    doc.text('' + this.taxon.class, 41, 115, '')
    doc.text('' + this.taxon.order, 41, 120, '')
    doc.text('' + this.taxon.family, 41, 125, '')
    doc.text('' + this.taxon.specie, 41, 130, '')
    doc.text('' + this.taxon.scientificname, 96, 105, '')
    doc.text('' + this.taxon.acceptednameusage, 96, 110, '')
    doc.text('' + this.taxon.vernacularname, 96, 115, '')
    doc.text('' + this.taxon.originalnameusage + '', 96, 120, '')

    //Organismo
    doc.rect(135, 101, 60, 30)
    //titulo
    doc.setFontStyle("bold");
    doc.text('Nombre del Organismo:', 140, 105, '')
    doc.text('Alcance del Organismo:', 140, 115, '')
    //contenido
    doc.setFontStyle("");
    doc.text('' + this.organism.organismname, 145, 110, '')
    doc.text('' + this.organism.organismscope, 145, 120, '')

    //Ocurrencia
    doc.rect(26, 140, 170, 25)
    //titulos
    doc.setFontStyle("bold");
    doc.text('Cantidad de organismos:', 65, 145, 'right')
    doc.text('Estado de Vida:', 65, 150, 'right')
    doc.text('Condición Reproductiva:', 65, 155, 'right')
    doc.text('Sexo:', 65, 160, 'right')
    doc.text('Establecimiento de medios:', 145, 145, 'right')
    doc.text('Conteo Individual:', 145, 150, 'right')
    doc.text('Comportamiento:', 145, 155, 'right')
    doc.text('Preparaciones:', 145, 160, 'right')
    //contenido
    doc.setFontStyle("");
    doc.text('' + this.occurrence.individualcount + ' en ' + this.occurrence.organismquantitytype, 66, 145, '')
    doc.text('' + this.occurrence.lifestage, 66, 150, '')
    doc.text('' + this.occurrence.reproductivecondition, 66, 155, '')
    doc.text('' + this.occurrence.sex, 66, 160, '')
    doc.text('' + this.occurrence.establishmentmeans, 146, 145, '')
    doc.text('' + this.occurrence.individualcount + '', 146, 150, '')
    doc.text('' + this.occurrence.behavior, 146, 155, '')
    doc.text('' + this.occurrence.preparations, 146, 160, '')

    //Ubicación
    doc.rect(26, 175, 90, 100)
    //titulos
    doc.setFontStyle("bold");
    doc.text('Continente:', 65, 180, 'right')
    doc.text('Cuerpo de Agua:', 65, 185, 'right')
    doc.text('Isla:', 65, 190, 'right')
    doc.text('Dato geodésico:', 65, 195, 'right')
    doc.text('País:', 65, 200, 'right')
    doc.text('Provincia:', 65, 205, 'right')
    doc.text('Cantón:', 65, 210, 'right')
    doc.text('Parroquia:', 65, 215, 'right')
    doc.text('Ubicación Común:', 65, 220, 'right')
    doc.text('Elevación Mínima:', 65, 225, 'right')
    doc.text('Elevación Máxima:', 65, 230, 'right')
    doc.text('Ubicación de Acuerdo con:', 65, 235, 'right')
    doc.text('Latitud:', 65, 240, 'right')
    doc.text('Longitud:', 65, 245, 'right')
    doc.text('Incertidumbre en metros:', 65, 250, 'right')
    doc.text('Georeferenciado por:', 65, 255, 'right')
    doc.text('Precisión de coordenadas:', 65, 260, 'right')
    //contenido
    doc.setFontStyle("");
    doc.text('' + this.location.continent, 66, 180, '')
    doc.text('' + this.location.waterbody, 66, 185, '')
    doc.text('' + this.location.island, 66, 190, '')
    doc.text('' + this.location.geodeticdatum, 66, 195, '')
    doc.text('' + this.location.country, 66, 200, '')
    doc.text('' + this.location.stateprovince, 66, 205, '')
    doc.text('' + this.location.county, 66, 210, '')
    doc.text('' + this.location.municipality, 66, 215, '')
    doc.text('' + this.location.verbatimlocality, 66, 220, '')
    doc.text('' + this.location.minimumelevationinmeters, 66, 225, '')
    doc.text('' + this.location.maximumelevationinmeters, 66, 230, '')
    doc.text('' + this.location.locationaccordingto, 66, 235, '')
    doc.text('' + this.location.decimallatitude, 66, 240, '')
    doc.text('' + this.location.decimallongitude, 66, 245, '')
    doc.text('' + this.location.coordinateuncertaintyinmeters + '', 66, 250, '')
    doc.text('' + this.location.georeferencedby, 66, 255, '')
    doc.text('' + this.location.coordinateprecision, 66, 260, '')

    //Evento
    doc.rect(118, 175, 78, 35)
    //titulos
    doc.setFontStyle("bold");
    doc.text('Numero de Campo:', 150, 180, 'right')
    doc.text('Fecha del Evento:', 150, 185, 'right')
    doc.text('Hora del Evento:', 150, 190, 'right')
    doc.text('Hábitat:', 150, 195, 'right')
    doc.text('Protocolo de Muestreo:', 150, 200, 'right')
    doc.text('Tamaño de la Muestra:', 150, 205, 'right')
    //contenido
    doc.setFontStyle("");
    doc.text('' + this.event.fieldnumber, 151, 180, '')
    doc.text('' + this.event.eventdate, 151, 185, '')
    doc.text('' + this.event.eventtime, 151, 190, '')
    doc.text('' + this.event.habitat, 151, 195, '')
    doc.text('' + this.event.samplingprotocol, 151, 200, '')
    doc.text('' + this.event.samplesizevalue + ' en ' + this.event.samplesizeunit, 151, 205, '')

    //contexto geológico
    doc.rect(118, 220, 78, 55)
    //titulos
    doc.setFontStyle("bold");
    doc.setFontSize(13);
    doc.text('Eon', 120, 225, '')
    doc.text('Era', 120, 250, '')
    doc.text('Periodo', 155, 225, '')
    doc.text('Epoca', 155, 250, '')
    doc.setFontSize(8);
    doc.text('Eon más Alto:', 140, 230, 'right')
    doc.text('Eon más Bajo:', 140, 240, 'right')
    doc.text('Era más Alto:', 140, 255, 'right')
    doc.text('Era más Bajo:', 140, 265, 'right')
    doc.text('Periodo más Alto:', 170, 230, 'right')
    doc.text('Periodo más Bajo:', 170, 240, 'right')
    doc.text('Epoca más Alto:', 170, 255, 'right')
    doc.text('Epoca más Bajo:', 170, 265, 'right')
    //contenido
    doc.setFontStyle("");
    doc.text('' + this.geologicalcontext.latesteonorhighesteonthem, 145, 235, 'right')
    doc.text('' + this.geologicalcontext.earliesteonorlowesteonthem, 145, 245, 'right')
    doc.text('' + this.geologicalcontext.latesteraorhighesterathem, 145, 260, 'right')
    doc.text('' + this.geologicalcontext.earliesteraorlowesterathem, 145, 270, 'right')
    doc.text('' + this.geologicalcontext.latestperiodorhighestperiodthem, 175, 235, 'right')
    doc.text('' + this.geologicalcontext.earliestperiodorlowestperiodthem, 175, 245, 'right')
    doc.text('' + this.geologicalcontext.latestepochorhighestepochthem, 175, 260, 'right')
    doc.text('' + this.geologicalcontext.earliestepochorlowestepochthem, 175, 270, 'right')

    /*
        var columns = [['gg', 'Nombre']];
        var data = [
          ["Reino:", "animalia"],
          ["Filo:", "animalia"],
          ["Clase", "animalia"]];
    
        doc.autoTable({
          head: columns,
          body: data,
          margin: { top: 50 },
        })
    */
    doc.save('Reporte_Ficha.pdf');
  }

}