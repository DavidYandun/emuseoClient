import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeologicalcontextService } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogCreateEonComponent } from '../dialog-create-eon/dialog-create-eon.component';
import { DialogCreateEraComponent } from '../dialog-create-era/dialog-create-era.component';
import { DialogCreatePeriodComponent } from '../dialog-create-period/dialog-create-period.component';
import { DialogCreateEpochComponent } from '../dialog-create-epoch/dialog-create-epoch.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-geologicalcontext',
  templateUrl: './create-geologicalcontext.component.html',
  styleUrls: ['./create-geologicalcontext.component.css']
})
export class CreateGeologicalcontextComponent implements OnInit {
  @Input() identificationid: number;
  @Output() geologicalBool = new EventEmitter;
  geologicalcontext = this.formBuilder.group({
    identificationid: [null],
    earliesteonorlowesteonothem: [null],
    latesteonorhighesteonothem: [null],
    earliesteraorlowesterathem: [null],
    latesteraorhighesterathem: [null],
    earliestperiodorlowestsystem: [null],
    latestperiodorhighestsystem: [null],
    earliestepochorlowestseries: [null],
    latestepochorhighestseries: [null],
    geologicalcontextremarks: [null]
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
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getLists();
  }
  postGeologicalContext() {
    this.geologicalcontext.value.identificationid = this.identificationid;
    if (this.geologicalcontext.value.identificationid) {
      this.geologicalcontextService.postGeologicalcontext(this.geologicalcontext.value).subscribe(data => {
        this.geologicalBool.emit(true);
        this.openSnackBar('REGISTRO DE CONTEXTO GEOLÓGICO EXITOSO', '✅');
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
