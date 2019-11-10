import { Component, OnInit, Input } from '@angular/core';
import { GeologicalcontextService } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCreateEonComponent } from '../dialog-create-eon/dialog-create-eon.component';
import { DialogCreateEraComponent } from '../dialog-create-era/dialog-create-era.component';
import { DialogCreatePeriodComponent } from '../dialog-create-period/dialog-create-period.component';
import { DialogCreateEpochComponent } from '../dialog-create-epoch/dialog-create-epoch.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-geologicalcontext',
  templateUrl: './update-geologicalcontext.component.html',
  styleUrls: ['./update-geologicalcontext.component.css']
})
export class UpdateGeologicalcontextComponent implements OnInit {
  @Input() identificationid: number;

  geologicalcontext = new FormGroup({
    identificationid: new FormControl(null),
    earliesteonorlowesteonothem: new FormControl(null),
    latesteonorhighesteonothem: new FormControl(null),
    earliesteraorlowesterathem: new FormControl(null),
    latesteraorhighesterathem: new FormControl(null),
    earliestperiodorlowestsystem: new FormControl(null),
    latestperiodorhighestsystem: new FormControl(null),
    earliestepochorlowestseries: new FormControl(null),
    latestepochorhighestseries: new FormControl(null),
    geologicalcontextremarks: new FormControl(null),
  });
  //arrays
  eons: any;
  eras: any;
  periods: any;
  epochs: any;
  //individuals
  eon: any;
  era: any;
  period: any;
  epoch: any;
  constructor(
    private formBuilder: FormBuilder,
    private geologicalcontextService: GeologicalcontextService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.geologicalcontextService.getGeologicalcontextId(this.route.snapshot.params['identificationid']).subscribe(data => {
      if (this.geologicalcontext) {
        this.geologicalcontext = new FormGroup({
          geologicalcontextid: new FormControl(data.geologicalcontextid),
          identificationid: new FormControl(data.identificationid),
          earliesteonorlowesteonothem: new FormControl(data.earliesteonorlowesteonothem),
          latesteonorhighesteonothem: new FormControl(data.latesteonorhighesteonothem),
          earliesteraorlowesterathem: new FormControl(data.earliesteraorlowesterathem),
          latesteraorhighesterathem: new FormControl(data.latesteraorhighesterathem),
          earliestperiodorlowestsystem: new FormControl(data.earliestperiodorlowestsystem),
          latestperiodorhighestsystem: new FormControl(data.latestperiodorhighestsystem),
          earliestepochorlowestseries: new FormControl(data.earliestepochorlowestseries),
          latestepochorhighestseries: new FormControl(data.latestepochorhighestseries),
          geologicalcontextremarks: new FormControl(data.geologicalcontextremarks),
        });
      }
    })
    this.getLists();
  }
  updateGeologicalContext() {
    if (this.geologicalcontext.value.identificationid) {
      this.geologicalcontextService.putGeologicalcontext(this.geologicalcontext.value.geologicalcontextid, this.geologicalcontext.value).subscribe(data => {
        this.openSnackBar('ACTUALIZACIÓN DE CONTEXTO GEOLÓGICO EXITOSO', '✅');
      },
        error => {
          this.openSnackBar(error.error.message, '🛑');
          console.log(JSON.stringify(error));
        });
    }
  }
  getLists() {
    this.geologicalcontextService.getEons().subscribe(data => {
      this.eons = data;
    },
      error => {
        this.openSnackBar(error.error.message, '🛑');
        console.log(JSON.stringify(error));
      });
    this.geologicalcontextService.getEras().subscribe(data => {
      this.eras = data;
    },
      error => {
        this.openSnackBar(error.error.message, '🛑');
        console.log(JSON.stringify(error));
      });
    this.geologicalcontextService.getPeriods().subscribe(data => {
      this.periods = data;
    },
      error => {
        this.openSnackBar(error.error.message, '🛑');
        console.log(JSON.stringify(error));
      });
    this.geologicalcontextService.getEpochs().subscribe(data => {
      this.epochs = data;
    },
      error => {
        this.openSnackBar(error.error.message, '🛑');
        console.log(JSON.stringify(error));
      });
  }

  addEon(): void {
    const dialogRef = this.dialog.open(DialogCreateEonComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.eon = result;
      this.postEon();
    });
  }
  addEra(): void {
    const dialogRef = this.dialog.open(DialogCreateEraComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.era = result;
      this.postEra();
    });
  }
  addPeriod(): void {
    const dialogRef = this.dialog.open(DialogCreatePeriodComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.period = result;
      this.postPeriod();
    });
  }
  addEpoch(): void {
    const dialogRef = this.dialog.open(DialogCreateEpochComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.epoch = result;
      this.postEpoch();
    });
  }

  postEon() {
    this.geologicalcontextService.postEon(this.eon).subscribe(data => {
      this.openSnackBar('REGISTRO EON EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postEra() {
    this.geologicalcontextService.postEra(this.era).subscribe(data => {
      this.openSnackBar('REGISTRO ERA EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postPeriod() {
    this.geologicalcontextService.postPeriod(this.period).subscribe(data => {
      this.openSnackBar('REGISTRO PERIOD EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postEpoch() {
    this.geologicalcontextService.postEpoch(this.epoch).subscribe(data => {
      this.openSnackBar('REGISTRO EPOCH EXITOSO', '✅');
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
