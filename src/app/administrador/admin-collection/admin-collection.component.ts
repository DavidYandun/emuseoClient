import { Component, OnInit } from '@angular/core';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordLevelService } from 'src/app/services/dwc_record-level_services/record-level.service';
import { OccurrenceService } from 'src/app/services/dwc_occurrence_services/occurrence.service';
import { OrganismService } from 'src/app/services/dwc_organism_services/organism.service';
import { EventService } from 'src/app/services/dwc_event_services/event.service';
import { LocationService } from 'src/app/services/dwc_location_services/location.service';
import { GeologicalcontextService } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';


@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.css']
})
export class AdminCollectionComponent implements OnInit {
  loggedin = false;
  isLinear = true;
  identificationid: number;

  taxonBool: boolean;
  recordlevelBool: boolean;
  occurrenceBool: boolean;
  organismBool: boolean;
  eventBool: boolean;
  locationBool: boolean;
  geologicalBool: boolean;

  constructor(
    private taxonService: TaxonService,
    private recordlevelService: RecordLevelService,
    private occurrenceService: OccurrenceService,
    private organismService: OrganismService,
    private eventService: EventService,
    private locationService: LocationService,
    private geologicalcontextService: GeologicalcontextService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
      if (this.route.snapshot.params['identificationid']) {
        this.identificationid = this.route.snapshot.params['identificationid'];
        //verificar si existe taxon
        this.taxonService.getTaxonId(this.route.snapshot.params['identificationid']).subscribe(data => {
          if (data.identificationid) {
            this.taxonBool = true;
          } else {
            this.taxonBool = false;
          }
        });
        //verificar si existe recordlevel
        this.recordlevelService.getRecordLevelId(this.route.snapshot.params['identificationid']).subscribe(data => {
          if (data.identificationid) {
            this.recordlevelBool = true;
          } else {
            this.recordlevelBool = false;
          }
        });
        //verificar si existe occurrence
        this.occurrenceService.getOccurrenceId(this.route.snapshot.params['identificationid']).subscribe(data => {
          if (data.identificationid) {
            this.occurrenceBool = true;
          } else {
            this.occurrenceBool = false;
          }
        });
        //verificar si existe organism
        this.organismService.getOrganismId(this.route.snapshot.params['identificationid']).subscribe(data => {
          if (data.identificationid) {
            this.organismBool = true;
          } else {
            this.organismBool = false;
          }
        });
        //verificar si existe event
        this.eventService.getEventId(this.route.snapshot.params['identificationid']).subscribe(data => {
          if (data.identificationid) {
            this.eventBool = true;
          } else {
            this.eventBool = false;
          }
        });
        //verificar si existe event
        this.locationService.getLocationId(this.route.snapshot.params['identificationid']).subscribe(data => {
          if (data.identificationid) {
            this.locationBool = true;
          } else {
            this.locationBool = false;
          }
        });
        //verificar si existe geologicalcontext
        this.geologicalcontextService.getGeologicalcontextId(this.route.snapshot.params['identificationid']).subscribe(data => {
          if (data.identificationid) {
            this.geologicalBool = true;
          } else {
            this.geologicalBool = false;
          }
        });

      }
    } else {
      this.router.navigate(['/admin']);
      this.loggedin = false;
    }
  }

  postTaxon(e) {
    this.taxonBool = e;
  }
  postRecordLevel(e) {
    this.recordlevelBool = e;
  }
  postOccurrence(e) {
    this.occurrenceBool = e;
  }
  postOrganism(e) {
    this.organismBool = e;
  }
  postEvent(e) {
    this.eventBool = e;
  }
  postLocation(e) {
    this.locationBool = e;
  }
  postGeological(e) {
    this.geologicalBool = e;
  }
  postIdentificationid(e) {
    this.identificationid = e;
    console.log(this.identificationid);
  }
}
