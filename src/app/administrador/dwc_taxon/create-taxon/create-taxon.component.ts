import { Component, OnInit, Inject, Input, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCreatePhylumComponent } from '../dialog-create-phylum/dialog-create-phylum.component';
import { DialogCreateClassComponent } from '../dialog-create-class/dialog-create-class.component';
import { DialogCreateOrderComponent } from '../dialog-create-order/dialog-create-order.component';
import { DialogCreateFamilyComponent } from '../dialog-create-family/dialog-create-family.component';
import { DialogCreateGenusComponent } from '../dialog-create-genus/dialog-create-genus.component';
import { DialogCreateSpecieComponent } from '../dialog-create-specie/dialog-create-specie.component';
import { Router } from '@angular/router';
import { DialogCreateTaxonomicstatusComponent } from '../dialog-create-taxonomicstatus/dialog-create-taxonomicstatus.component';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-create-taxon',
  templateUrl: './create-taxon.component.html',
  styleUrls: ['./create-taxon.component.css']
})
export class CreateTaxonComponent implements OnInit {

  @Input() identificationid: number;
  @Output() taxonBool = new EventEmitter();

  taxon = this.formBuilder.group({
    identificationid: [null],
    taxonrank: [null],
    taxonomicstatus: ['', Validators.required],
    scientificname: ['', Validators.required],
    acceptednameusage: [''],
    originalnameusage: [''],
    vernacularname: [''],
    taxonremarks: [''],
    kingdom: [null, Validators.required],
    phylum: [null],
    class: [null],
    order: [null],
    genus: [null],
    family: [null],
    specie: [null]
  });

  //arrays
  kingdoms: any;
  phylums: any;
  classs: any;
  orders: any;
  familys: any;
  genuss: any;
  species: any;
  taxonranks: any;
  taxonomicstatuss: any;

  //individuals
  phylum: any;
  class: any;
  order: any;
  family: any;
  genus: any;
  specie: any;
  taxonrank: any;
  taxonomicstatus: any;

  //shows
  kingdomshow: boolean = true;
  phylumshow: boolean = true;
  classshow: boolean = true;
  ordershow: boolean = true;
  familyshow: boolean = true;
  genusshow: boolean = true;
  specieshow: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private taxonService: TaxonService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.getKingdoms();
    this.getTaxonRanks();
    this.getTaxonomicStatus();
  }
  postTaxon() {
    this.taxon.value.identificationid = this.identificationid;
    this.llenarTaxonRank();
    if (this.taxon.value.identificationid && this.taxon.value.taxonrank) {
      this.taxonService.postTaxon(this.taxon.value).subscribe(data => {
        this.taxonBool.emit(true);
        this.openSnackBar('REGISTRO DE TAXÓN EXITOSO', '✅');
        this.router.navigate(['admin-collection/' + this.identificationid]);
      }, error => {
        this.taxonBool.emit(false);
        this.openSnackBar(error.error.message, '🛑');
        console.log(JSON.stringify(error));
      });
    }
  }
  selectSpecie() {
    this.specieshow = false;
    this.llenarTaxonRank();
  }
  llenarTaxonRank() {
    if (this.specieshow == true) {
      if (this.genusshow == true) {
        if (this.familyshow == true) {
          if (this.ordershow == true) {
            if (this.classshow == true) {
              if (this.phylumshow == true) {
                if (this.kingdomshow == true) {
                  this.taxon.value.taxonrank = '';
                } else { this.taxon.value.taxonrank = 'REINO'; }
              } else { this.taxon.value.taxonrank = 'FILO'; }
            } else { this.taxon.value.taxonrank = 'CLASE'; }
          } else { this.taxon.value.taxonrank = 'ORDEN'; }
        } else { this.taxon.value.taxonrank = 'FAMILIA'; }
      } else { this.taxon.value.taxonrank = 'GENERO'; }
    } else { this.taxon.value.taxonrank = 'ESPECIE'; }
  }
  getKingdoms() {
    this.taxonService.getKingdoms().subscribe(data => {
      this.kingdoms = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });

  }
  getPhylums() {
    if (this.taxon.value.kingdom != null) {
      this.kingdomshow = false;
    } else {
      this.kingdomshow = true;
    }
    this.taxon.value.phylum = null;
    this.taxonService.getPhylums(this.taxon.value.kingdom).subscribe(data => {
      this.phylums = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getClasses();
    this.specieshow = true;
    this.llenarTaxonRank();
  }
  getClasses() {
    if (this.taxon.value.phylum != null) {
      this.phylumshow = false;
    } else {
      this.phylumshow = true;
    }
    this.taxon.value.class = null
    this.taxonService.getClasses(this.taxon.value.phylum).subscribe(data => {
      this.classs = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getOrders();
    this.specieshow = true;
    this.llenarTaxonRank();
  }
  getOrders() {
    if (this.taxon.value.class != null) {
      this.classshow = false;
    } else {
      this.classshow = true;
    }
    this.taxon.value.order = null;
    this.taxonService.getOrders(this.taxon.value.class).subscribe(data => {
      this.orders = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getFamilys();
    this.specieshow = true;
    this.llenarTaxonRank();
  }
  getFamilys() {
    if (this.taxon.value.order != null) {
      this.ordershow = false;
    } else {
      this.ordershow = true;
    }
    this.taxon.value.family = null;
    this.taxonService.getFamilys(this.taxon.value.order).subscribe(data => {
      this.familys = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getGenuss();
    this.specieshow = true;
    this.llenarTaxonRank();
  }
  getGenuss() {
    if (this.taxon.value.family != null) {
      this.familyshow = false;
    } else {
      this.familyshow = true;
    }
    this.taxon.value.genus = null;
    this.taxonService.getGenuss(this.taxon.value.family).subscribe(data => {
      this.genuss = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.getSpecies();
    this.specieshow = true;
    this.llenarTaxonRank();
  }
  getSpecies() {
    if (this.taxon.value.genus != null) {
      this.genusshow = false;
    } else {
      this.genusshow = true;
    }
    this.taxonService.getSpecies(this.taxon.value.genus).subscribe(data => {
      this.species = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
    this.specieshow = true;
    this.llenarTaxonRank();
  }
  getTaxonRanks() {
    this.taxonService.getTaxonRanks().subscribe(data => {
      this.taxonranks = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  getTaxonomicStatus() {
    this.userService.getPerfil(sessionStorage.getItem('email')).subscribe(dato => {
      if (dato.rolid == 1 || dato.rolid == 2) {
        this.taxonService.getTaxonomicStatusTaxonomo().subscribe(data => {
          this.taxonomicstatuss = data;
        },
          error => {
            console.log(JSON.stringify(error));
          });
      } else if (dato.rolid == 3 || dato.rolid == 4) {
        this.taxonService.getTaxonomicStatusUsuario().subscribe(data => {
          this.taxonomicstatuss = data;
        },
          error => {
            console.log(JSON.stringify(error));
          });
      }
    }, error => {
      console.log(error);
    })
  }
  addPhylum(): void {
    const dialogRef = this.dialog.open(DialogCreatePhylumComponent, {
      width: '350px',
      data: { kingdom: this.taxon.value.kingdom }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.phylum = result;
      this.postPhylum();

    });
  }
  addClass(): void {
    const dialogRef = this.dialog.open(DialogCreateClassComponent, {
      width: '350px',
      data: { phylum: this.taxon.value.phylum }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.class = result;
      this.postClass();

    });
  }
  addOrder(): void {
    const dialogRef = this.dialog.open(DialogCreateOrderComponent, {
      width: '350px',
      data: { class: this.taxon.value.class }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.order = result;
      this.postOrder();

    });
  }
  addFamily(): void {
    const dialogRef = this.dialog.open(DialogCreateFamilyComponent, {
      width: '350px',
      data: { order: this.taxon.value.order }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.family = result;
      this.postFamily();

    });
  }
  addGenus(): void {
    const dialogRef = this.dialog.open(DialogCreateGenusComponent, {
      width: '350px',
      data: { family: this.taxon.value.family }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.genus = result;
      this.postGenus();

    });
  }
  addSpecie(): void {
    const dialogRef = this.dialog.open(DialogCreateSpecieComponent, {
      width: '350px',
      data: { genus: this.taxon.value.genus }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.specie = result;
      this.postSpecie();

    });
  }
  addTaxonomicStatus(): void {
    const dialogRef = this.dialog.open(DialogCreateTaxonomicstatusComponent, {
      width: '350px',
      data: { }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.taxonomicstatus = result;
      this.postTaxonomicStatus();

    });
  }
  postPhylum() {
    this.taxonService.postPhylum(this.phylum).subscribe(data => {
      this.openSnackBar('FILO Registrado', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getPhylums();
  }
  postClass() {
    this.taxonService.postClass(this.class).subscribe(data => {
      this.openSnackBar('CLASE Registrado', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getClasses();
  }
  postOrder() {
    this.taxonService.postOrder(this.order).subscribe(data => {
      this.openSnackBar('ORDEN Registrado', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getOrders();
  }
  postFamily() {
    this.taxonService.postFamily(this.family).subscribe(data => {
      this.openSnackBar('FAMILIA Registrado', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getFamilys();
  }
  postGenus() {
    this.taxonService.postGenus(this.genus).subscribe(data => {
      this.openSnackBar('GENERO Registrado', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getGenuss();
  }
  postSpecie() {
    this.taxonService.postSpecie(this.specie).subscribe(data => {
      this.openSnackBar('ESPECIE Registrado', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error.message));
    });
    this.getSpecies();
  }
  postTaxonomicStatus() {
    this.taxonService.postTaxonomicStatus(this.taxonomicstatus).subscribe(data => {
      this.openSnackBar('ESTADO Registrado', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error.message));
    });
    this.getTaxonomicStatus();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}