import { Component, OnInit, Input } from '@angular/core';
import { GeologicalcontextService } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';
import { MatDialog } from '@angular/material';
import { DialogCreateEonComponent } from '../dialog-create-eon/dialog-create-eon.component';
import { DialogCreateEraComponent } from '../dialog-create-era/dialog-create-era.component';
import { DialogCreatePeriodComponent } from '../dialog-create-period/dialog-create-period.component';
import { DialogCreateEpochComponent } from '../dialog-create-epoch/dialog-create-epoch.component';

@Component({
  selector: 'app-create-geologicalcontext',
  templateUrl: './create-geologicalcontext.component.html',
  styleUrls: ['./create-geologicalcontext.component.css']
})
export class CreateGeologicalcontextComponent implements OnInit {
  @Input() identificationid: number;
  geologicalcontext: any = {
    identificationid: null,
    earliesteonorlowesteonothem: null,
    latesteonorhighesteonothem: null,
    earliesteraorlowesterathem: null,
    latesteraorhighesterathem: null,
    earliestperiodorlowestsystem: null,
    latestperiodorhighestsystem: null,
    earliestepochorlowestseries: null,
    latestepochorhighestseries: null,
    geologicalcontextremarks: null
  }
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
  constructor(private geologicalcontextService: GeologicalcontextService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getLists();
  }
  postGeologicalContext() {
    this.geologicalcontext.identificationid = this.identificationid;
    if (this.geologicalcontext.identificationid) {
      this.geologicalcontextService.postGeologicalcontext(this.geologicalcontext).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(JSON.stringify(error));
        });
    }
  }
  getLists() {
    this.geologicalcontextService.getEons().subscribe(data => {
      this.eons = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.geologicalcontextService.getEras().subscribe(data => {
      this.eras = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.geologicalcontextService.getPeriods().subscribe(data => {
      this.periods = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.geologicalcontextService.getEpochs().subscribe(data => {
      this.epochs = data;
    },
      error => {
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
      console.log(this.eon);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postEra() {
    this.geologicalcontextService.postEra(this.era).subscribe(data => {
      console.log(this.era);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postPeriod() {
    this.geologicalcontextService.postPeriod(this.period).subscribe(data => {
      console.log(this.period);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postEpoch() {
    this.geologicalcontextService.postEpoch(this.epoch).subscribe(data => {
      console.log(this.epoch);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }

}
