import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocationService } from 'src/app/services/dwc_location_services/location.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCreateCountryComponent } from '../dialog-create-country/dialog-create-country.component';
import { DialogCreateStateprovinceComponent } from '../dialog-create-stateprovince/dialog-create-stateprovince.component';
import { DialogCreateCountyComponent } from '../dialog-create-county/dialog-create-county.component';
import { DialogCreateMunicipalityComponent } from '../dialog-create-municipality/dialog-create-municipality.component';
import { DialogCreateContinentComponent } from '../dialog-create-continent/dialog-create-continent.component';
import { DialogCreateWaterbodyComponent } from '../dialog-create-waterbody/dialog-create-waterbody.component';
import { DialogCreateIslandComponent } from '../dialog-create-island/dialog-create-island.component';
import { DialogCreateGeodeticdatumComponent } from '../dialog-create-geodeticdatum/dialog-create-geodeticdatum.component';
import { DialogCreateGeoreferenceverificationstatusComponent } from '../dialog-create-georeferenceverificationstatus/dialog-create-georeferenceverificationstatus.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {
  @Input() identificationid: number;
  @Output() locationBool = new EventEmitter;
  location = this.formBuilder.group({
    identificationid: [null],
    continent: [null],
    waterbody: [null],
    island: [null],
    geodeticdatum: [null],
    georeferenceverificationstatus: [null],
    verbatimlocality: [null],
    minimumelevationinmeters: [null],
    maximumelevationinmeters: [null],
    locationaccordingto: [null],
    locationremarks: [null],
    decimallatitude: [null],
    decimallongitude: [null],
    coordinateuncertaintyinmeters: [null],
    coordinateprecision: [null],
    georeferencedby: [null],
    georeferenceddate: [null],
    georeferencesources: [null],
    georeferenceremarks: [null],
    country: [null],
    stateprovince: [null],
    county: [null],
    municipality: [null]
  });

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

  constructor(
    private formBuilder: FormBuilder,
    private locationService: LocationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getCountrys();
    this.getLists();
  }
  postLocation() {
    this.location.value.identificationid = this.identificationid;
    if (this.location.value.identificationid) {
      this.locationService.postLocation(this.location.value).subscribe(data => {
        this.locationBool.emit(true);
        this.openSnackBar('REGISTRO LOCATION EXITOSO', '✅');
      },
        error => {
          this.openSnackBar(error.error.message, '🛑');
          console.log(JSON.stringify(error));
        });
    }
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
    if (this.location.value.country != null) {
      this.countryshow = false;
    } else {
      this.countryshow = true;
    }
    this.locationService.getStateprovinces(this.location.value.country).subscribe(data => {
      this.stateprovinces = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getCountys();
  }
  getCountys() {
    if (this.location.value.stateprovince != null) {
      this.stateprovinceshow = false;
    } else {
      this.stateprovinceshow = true;
    }
    this.locationService.getCountys(this.location.value.stateprovince).subscribe(data => {
      this.countys = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getMunicipalitys();
  }
  getMunicipalitys() {
    if (this.location.value.county != null) {
      this.countyshow = false;
    } else {
      this.countyshow = true;
    }
    this.locationService.getMunicipalitys(this.location.value.county).subscribe(data => {
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
      data: { country: this.location.value.country }
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
      data: { stateprovince: this.location.value.stateprovince }
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
      data: { county: this.location.value.county }
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
      data: { continent: this.location.value.continent }
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
      data: { waterbody: this.location.value.waterbody }
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
      data: { island: this.location.value.island }
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
      data: { geodeticdatum: this.location.value.geodeticdatum }
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
      data: { georeferenceverificationstatus: this.location.value.georeferenceverificationstatus }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.georeferenceverificationstatus = result;
      this.postGeoreferenceverificationstatus();
    });
  }

  postCountry() {
    this.locationService.postCountry(this.country).subscribe(data => {
      this.openSnackBar('REGISTRO COUNTRY EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getCountrys();
  }
  postStateProvince() {
    this.locationService.postStateProvince(this.stateprovince).subscribe(data => {
      this.openSnackBar('REGISTRO PROVINCE EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getStateProvinces();
  }
  postCounty() {
    this.locationService.postCounty(this.county).subscribe(data => {
      this.openSnackBar('REGISTRO CANTON EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getCountys();
  }
  postMunicipality() {
    this.locationService.postMunicipality(this.municipality).subscribe(data => {
      this.openSnackBar('REGISTRO PARROQUIA EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getMunicipalitys();
  }
  postContinent() {
    this.locationService.postContinent(this.continent).subscribe(data => {
      this.openSnackBar('REGISTRO CONTINENT EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postWaterBody() {
    this.locationService.postWaterBody(this.waterbody).subscribe(data => {
      this.openSnackBar('REGISTRO WATERBODY EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postIsland() {
    this.locationService.postIsland(this.island).subscribe(data => {
      this.openSnackBar('REGISTRO ISLAND EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postGeodeticdatum() {
    this.locationService.postGeodeticdatum(this.geodeticdatum).subscribe(data => {
      this.openSnackBar('REGISTRO GEODETIC DATUM EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postGeoreferenceverificationstatus() {
    this.locationService.postGeoreferenceverificationstatus(this.georeferenceverificationstatus).subscribe(data => {
      this.openSnackBar('REGISTRO GEOREF VERIFICATION STATUS EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}