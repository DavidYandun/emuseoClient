import { Component, OnInit } from '@angular/core';
import { OccurrenceService } from 'src/app/services/dwc_occurrence_services/occurrence.service';
import { MatDialog } from '@angular/material';
import { DialogCreateLifestageComponent } from '../dialog-create-lifestage/dialog-create-lifestage.component';
import { DialogCreateReproductiveconditionComponent } from '../dialog-create-reproductivecondition/dialog-create-reproductivecondition.component';
import { DialogCreateSexComponent } from '../dialog-create-sex/dialog-create-sex.component';
import { DialogCreateEstablishmentmeansComponent } from '../dialog-create-establishmentmeans/dialog-create-establishmentmeans.component';
import { DialogCreateOrganismquantitytypeComponent } from '../dialog-create-organismquantitytype/dialog-create-organismquantitytype.component';

@Component({
  selector: 'app-create-occurrence',
  templateUrl: './create-occurrence.component.html',
  styleUrls: ['./create-occurrence.component.css']
})
export class CreateOccurrenceComponent implements OnInit {
  occurrence: any = {
    identificationid: null,
    organismquantitytype: null,
    lifestage: null,
    reproductivecondition: null,
    sex: null,
    establishmentmeans: null,
    recordnumber: null,
    individualcount: null,
    organismquantity: null,
    behavior: null,
    preparations: null,
    associatedreferences: null,
    occurrenceremarks: null
  }

  
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

  constructor(private occurrenceService: OccurrenceService,
    public dialog:MatDialog) { }

  ngOnInit() {
    this.getLists();
  }
  postOccurrence() {
    this.occurrenceService.postOccurrence(this.occurrence).subscribe(resultado => {
      console.log(this.occurrence);
    },
      error => {
        console.log(JSON.stringify(error));
      });
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
      data:{}
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
      data:{}
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
      data:{}
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
      data:{}
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
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.organismquantitytype = result;
      this.postOrganismQuantityType();
    });
  }

  postLifeStage() {
    this.occurrenceService.postLifeStage(this.lifestage).subscribe(data => {
      console.log(this.lifestage);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postReproductiveCondition() {
    this.occurrenceService.postReproductiveCondition(this.reproductivecondition).subscribe(data => {
      console.log(this.reproductivecondition);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postSex() {
    this.occurrenceService.postSex(this.sex).subscribe(data => {
      console.log(this.sex);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postEstablishmentmeans() {
    this.occurrenceService.postEstablishmentmeans(this.establishmentmeans).subscribe(data => {
      console.log(this.establishmentmeans);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
  postOrganismQuantityType() {
    this.occurrenceService.postOrganismQuantityType(this.organismquantitytype).subscribe(data => {
      console.log(this.organismquantitytype);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getLists();
  }
}
