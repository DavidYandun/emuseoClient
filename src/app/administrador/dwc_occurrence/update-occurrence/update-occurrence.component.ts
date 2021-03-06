import { Component, OnInit, Input } from '@angular/core';
import { OccurrenceService } from 'src/app/services/dwc_occurrence_services/occurrence.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCreateLifestageComponent } from '../dialog-create-lifestage/dialog-create-lifestage.component';
import { DialogCreateReproductiveconditionComponent } from '../dialog-create-reproductivecondition/dialog-create-reproductivecondition.component';
import { DialogCreateSexComponent } from '../dialog-create-sex/dialog-create-sex.component';
import { DialogCreateEstablishmentmeansComponent } from '../dialog-create-establishmentmeans/dialog-create-establishmentmeans.component';
import { DialogCreateOrganismquantitytypeComponent } from '../dialog-create-organismquantitytype/dialog-create-organismquantitytype.component';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-occurrence',
  templateUrl: './update-occurrence.component.html',
  styleUrls: ['./update-occurrence.component.css']
})
export class UpdateOccurrenceComponent implements OnInit {
  @Input() identificationid: number;

  occurrence = new FormGroup({
    identificationid: new FormControl(null),
    organismquantitytype: new FormControl(null),
    lifestage: new FormControl(null),
    reproductivecondition: new FormControl(null),
    sex: new FormControl(null),
    establishmentmeans: new FormControl(null),
    recordnumber: new FormControl(null),
    individualcount: new FormControl(null),
    organismquantity: new FormControl(null),
    behavior: new FormControl(null),
    preparations: new FormControl(null),
    associatedreferences: new FormControl(null),
    occurrenceremarks: new FormControl(null),
  });


  lifestages: any;
  reproductiveconditions: any;
  sexs: any;
  establishmentmeanss: any;
  organismquantitytypes: any;


  lifestage: any;
  reproductivecondition: any;
  sex: any;
  establishmentmeans: any;
  organismquantitytype: any;

  constructor(
    private formBuilder: FormBuilder,
    private occurrenceService: OccurrenceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.occurrenceService.getOccurrenceId(this.route.snapshot.params['identificationid']).subscribe(data => {
      if (this.occurrence) {
        this.occurrence = new FormGroup({
          occurrenceid: new FormControl(data.occurrenceid),
          identificationid: new FormControl(data.identificationid),
          organismquantitytype: new FormControl(data.organismquantitytype),
          lifestage: new FormControl(data.lifestage),
          reproductivecondition: new FormControl(data.reproductivecondition),
          sex: new FormControl(data.sex),
          establishmentmeans: new FormControl(data.establishmentmeans),
          recordnumber: new FormControl(data.recordnumber),
          individualcount: new FormControl(data.individualcount),
          organismquantity: new FormControl(data.organismquantity),
          behavior: new FormControl(data.behavior),
          preparations: new FormControl(data.preparations),
          associatedreferences: new FormControl(data.associatedreferences),
          occurrenceremarks: new FormControl(data.occurrenceremarks),
        });
      }
    })
    this.getLists();
  }
  updateOccurrence() {

    if (this.occurrence.value.identificationid) {
      this.occurrenceService.putOccurrence(this.occurrence.value.occurrenceid, this.occurrence.value).subscribe(data => {
        this.openSnackBar('ACTUALIZACIÓN DE OCCURRENCE EXITOSO', '✅');
      },
        error => {
          this.openSnackBar(error.error.message, '🛑');
          console.log(JSON.stringify(error));
        });
    }
  }
  getLists() {
    this.occurrenceService.getOrganismquantitytypes().subscribe(data => {
      this.organismquantitytypes = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.occurrenceService.getLifeStages().subscribe(data => {
      this.lifestages = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.occurrenceService.getReproductiveConditions().subscribe(data => {
      this.reproductiveconditions = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.occurrenceService.getSex().subscribe(data => {
      this.sexs = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.occurrenceService.getEstablishmentmeans().subscribe(data => {
      this.establishmentmeanss = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }




  addLifeStage(): void {
    const dialogRef = this.dialog.open(DialogCreateLifestageComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.lifestage = result;
      this.postLifeStage();
    });
  }
  addReproductiveCondition(): void {
    const dialogRef = this.dialog.open(DialogCreateReproductiveconditionComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reproductivecondition = result;
      this.postReproductiveCondition();
    });
  }
  addSex(): void {
    const dialogRef = this.dialog.open(DialogCreateSexComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.sex = result;
      this.postSex();
    });
  }
  addEstablishmentmeans(): void {
    const dialogRef = this.dialog.open(DialogCreateEstablishmentmeansComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.establishmentmeans = result;
      this.postEstablishmentmeans();
    });
  }
  addOrganismQuantityType(): void {
    const dialogRef = this.dialog.open(DialogCreateOrganismquantitytypeComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.organismquantitytype = result;
      this.postOrganismQuantityType();
    });
  }

  postLifeStage() {
    this.occurrenceService.postLifeStage(this.lifestage).subscribe(data => {
      this.openSnackBar('REGISTRO DE LIFE STAGE EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postReproductiveCondition() {
    this.occurrenceService.postReproductiveCondition(this.reproductivecondition).subscribe(data => {
      this.openSnackBar('REGISTRO DE REPRODUCTIVE CONDITION EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postSex() {
    this.occurrenceService.postSex(this.sex).subscribe(data => {
      this.openSnackBar('REGISTRO DE SEX EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postEstablishmentmeans() {
    this.occurrenceService.postEstablishmentmeans(this.establishmentmeans).subscribe(data => {
      this.openSnackBar('REGISTRO DE ESTABLISHMENT MEANS EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postOrganismQuantityType() {
    this.occurrenceService.postOrganismQuantityType(this.organismquantitytype).subscribe(data => {
      this.openSnackBar('REGISTRO DE ORGANISM QUANTITY TYPE EXITOSO', '✅');
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
