import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/dwc_location_services/location.service';
import { MatDialog } from '@angular/material';
import { DialogCreateCountryComponent } from '../dialog-create-country/dialog-create-country.component';
import { DialogCreateStateprovinceComponent } from '../dialog-create-stateprovince/dialog-create-stateprovince.component';
import { DialogCreateCountyComponent } from '../dialog-create-county/dialog-create-county.component';
import { DialogCreateMunicipalityComponent } from '../dialog-create-municipality/dialog-create-municipality.component';
import { DialogCreateContinentComponent } from '../dialog-create-continent/dialog-create-continent.component';
import { DialogCreateWaterbodyComponent } from '../dialog-create-waterbody/dialog-create-waterbody.component';
import { DialogCreateIslandComponent } from '../dialog-create-island/dialog-create-island.component';
import { DialogCreateGeodeticdatumComponent } from '../dialog-create-geodeticdatum/dialog-create-geodeticdatum.component';
import { DialogCreateGeoreferenceverificationstatusComponent } from '../dialog-create-georeferenceverificationstatus/dialog-create-georeferenceverificationstatus.component';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {
  location: any = {
    identificationid: null,
    divpoliticaid: null,
    continent: null,
    waterbody: null,
    island: null,
    geodeticdatum: null,
    georeferenceverificationstatus: null,
    verbatimlocality: null,
    minimumelevationinmeters: null,
    maximumelevationinmeters: null,
    locationaccordingto: null,
    locationremarks: null,
    decimallatitude: null,
    decimallongitude: null,
    coordinateuncertaintyinmeters: null,
    coordinateprecision: null,
    georeferencedby: null,
    georeferenceddate: null,
    georeferencesources: null,
    georeferenceremarks: null,
    country: null,
    stateprovince: null,
    county: null,
    municipality: null
  }

  //arrays
  countrys: any;
  stateprovinces: any;
  countys: any;
  municipalitys: any;

  continents: any;
  waterbodys: any;
  islands: any;
  geodeticdatums: any;
  georeferenceverificationstatuss: any;

  //individuals
  country: any;
  stateprovince: any;
  county: any;
  municipality: any;

  continent: any;
  waterbody: any;
  island: any;
  geodeticdatum: any;
  georeferenceverificationstatus: any;

  //booleans
  countryshow: boolean = true;
  stateprovinceshow: boolean = true;
  countyshow: boolean = true;
  municipalityshow: boolean = true;

  constructor(private locationService: LocationService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getCountrys();
    this.getLists();
  }
  postLocation() {
    this.locationService.postLocation(this.location).subscribe(resultado => {
      console.log(this.location);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  getCountrys() {
    this.locationService.getCountrys().subscribe(data => {
      this.countrys = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  getStateProvinces() {
    if (this.location.country != null) {
      this.countryshow = false;
    } else {
      this.countryshow = true;
    }
    this.locationService.getStateprovinces(this.location.country).subscribe(data => {
      this.stateprovinces = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getCountys();
  }
  getCountys() {
    if (this.location.stateprovince != null) {
      this.stateprovinceshow = false;
    } else {
      this.stateprovinceshow = true;
    }
    this.locationService.getCountys(this.location.stateprovince).subscribe(data => {
      this.countys = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getMunicipalitys();
  }
  getMunicipalitys() {
    if (this.location.county != null) {
      this.countyshow = false;
    } else {
      this.countyshow = true;
    }
    this.locationService.getMunicipalitys(this.location.county).subscribe(data => {
      this.municipalitys = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  getLists() {
    this.locationService.getContinents().subscribe(data => {
      this.continents = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.locationService.getWaterbodys().subscribe(data => {
      this.waterbodys = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.locationService.getIslands().subscribe(data => {
      this.islands = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.locationService.getGeodeticdatums().subscribe(data => {
      this.geodeticdatums = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.locationService.getGeoreferenceverificationstatus().subscribe(data => {
      this.georeferenceverificationstatuss = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  addCountry(): void {
    const dialogRef = this.dialog.open(DialogCreateCountryComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.country = result;
      this.postCountry();
    });
  }
  addStateProvince(): void {
    const dialogRef = this.dialog.open(DialogCreateStateprovinceComponent, {
      width: '350px',
      data: { country: this.location.country }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.stateprovince = result;
      this.postStateProvince();
    });
  }
  addCounty(): void {
    const dialogRef = this.dialog.open(DialogCreateCountyComponent, {
      width: '350px',
      data: { stateprovince: this.location.stateprovince }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.county = result;
      this.postCounty();
    });
  }
  addMunicipality(): void {
    const dialogRef = this.dialog.open(DialogCreateMunicipalityComponent, {
      width: '350px',
      data: { county: this.location.county }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.municipality = result;
      this.postMunicipality();
    });
  }
  addContinent(): void {
    const dialogRef = this.dialog.open(DialogCreateContinentComponent, {
      width: '350px',
      data: { continent: this.location.continent }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.continent = result;
      this.postContinent();
    });
  }
  addWaterBody(): void {
    const dialogRef = this.dialog.open(DialogCreateWaterbodyComponent, {
      width: '350px',
      data: { waterbody: this.location.waterbody }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.waterbody = result;
      this.postWaterBody();
    });
  }
  addIsland(): void {
    const dialogRef = this.dialog.open(DialogCreateIslandComponent, {
      width: '350px',
      data: { island: this.location.island }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.island = result;
      this.postIsland();
    });
  }
  addGeodeticdatum(): void {
    const dialogRef = this.dialog.open(DialogCreateGeodeticdatumComponent, {
      width: '350px',
      data: { geodeticdatum: this.location.geodeticdatum }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.geodeticdatum = result;
      this.postGeodeticdatum();
    });
  }
  addGeoreferenceverificationstatus(): void {
    const dialogRef = this.dialog.open(DialogCreateGeoreferenceverificationstatusComponent, {
      width: '350px',
      data: { georeferenceverificationstatus: this.location.georeferenceverificationstatus }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.georeferenceverificationstatus = result;
      this.postGeoreferenceverificationstatus();
    });
  }

  postCountry() {
    this.locationService.postCountry(this.country).subscribe(data => {
      console.log(this.country);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getCountrys();
  }
  postStateProvince() {
    this.locationService.postStateProvince(this.stateprovince).subscribe(data => {
      console.log(this.stateprovince);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getStateProvinces();
  }
  postCounty() {
    this.locationService.postCounty(this.county).subscribe(data => {
      console.log(this.county);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getCountys();
  }
  postMunicipality() {
    this.locationService.postMunicipality(this.municipality).subscribe(data => {
      console.log(this.municipality);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getMunicipalitys();
  }
  postContinent() {
    this.locationService.postContinent(this.continent).subscribe(data => {
      console.log(this.continent);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postWaterBody() {
    this.locationService.postWaterBody(this.waterbody).subscribe(data => {
      console.log(this.waterbody);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postIsland() {
    this.locationService.postIsland(this.island).subscribe(data => {
      console.log(this.island);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postGeodeticdatum() {
    this.locationService.postGeodeticdatum(this.geodeticdatum).subscribe(data => {
      console.log(this.geodeticdatum);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postGeoreferenceverificationstatus() {
    this.locationService.postGeoreferenceverificationstatus(this.georeferenceverificationstatus).subscribe(data => {
      console.log(this.georeferenceverificationstatus);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
}
