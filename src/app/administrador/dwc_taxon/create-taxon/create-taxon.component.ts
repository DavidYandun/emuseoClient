import { Component, OnInit, Inject } from '@angular/core';
import { TaxonService } from 'src/app/services/dwc_taxon_services/taxon.service';
import { MatDialog } from '@angular/material';
import { DialogCreatePhylumComponent } from '../dialog-create-phylum/dialog-create-phylum.component';
import { DialogCreateClassComponent } from '../dialog-create-class/dialog-create-class.component';
import { DialogCreateOrderComponent } from '../dialog-create-order/dialog-create-order.component';
import { DialogCreateFamilyComponent } from '../dialog-create-family/dialog-create-family.component';
import { DialogCreateGenusComponent } from '../dialog-create-genus/dialog-create-genus.component';
import { DialogCreateSpecieComponent } from '../dialog-create-specie/dialog-create-specie.component';

@Component({
  selector: 'app-create-taxon',
  templateUrl: './create-taxon.component.html',
  styleUrls: ['./create-taxon.component.css']
})
export class CreateTaxonComponent implements OnInit {
  taxon: any = {
    identificationid: null,
    lineoid: null,
    taxonrank: null,
    taxonomicstatus: null,
    scientificname: null,
    acceptednameusage: null,
    parentnameusage: null,
    originalnameusage: null,
    vernacularname: null,
    taxonremarks: null,
    kingdom: null,
    phylum: null,
    class: null,
    order: null,
    genus: null,
    family: null,
    specie: null
  }

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

  constructor(private taxonService: TaxonService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getKingdoms();
    this.getTaxonRanks();
    this.getTaxonomicStatus();
  }
  postTaxon() {
    this.taxonService.postTaxon(this.taxon).subscribe(data => {
      console.log(this.taxon);
    }, error => {
      console.log(JSON.stringify(error));
    });
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
                  this.taxon.taxonrank = '';
                } else { this.taxon.taxonrank = 'Kingdom'; }
              } else { this.taxon.taxonrank = 'Phylum'; }
            } else { this.taxon.taxonrank = 'Class'; }
          } else { this.taxon.taxonrank = 'Order'; }
        } else { this.taxon.taxonrank = 'Family'; }
      } else { this.taxon.taxonrank = 'Genus'; }
    } else { this.taxon.taxonrank = 'Specie'; }
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
    if (this.taxon.kingdom != null) {
      this.kingdomshow = false;
    } else {
      this.kingdomshow = true;
    }
    this.taxon.phylum = null;
    this.taxonService.getPhylums(this.taxon.kingdom).subscribe(data => {
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
    if (this.taxon.phylum != null) {
      this.phylumshow = false;
    } else {
      this.phylumshow = true;
    }
    this.taxon.class = null
    this.taxonService.getClasses(this.taxon.phylum).subscribe(data => {
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
    if (this.taxon.class != null) {
      this.classshow = false;
    } else {
      this.classshow = true;
    }
    this.taxon.order = null;
    this.taxonService.getOrders(this.taxon.class).subscribe(data => {
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
    if (this.taxon.order != null) {
      this.ordershow = false;
    } else {
      this.ordershow = true;
    }
    this.taxon.family = null;
    this.taxonService.getFamilys(this.taxon.order).subscribe(data => {
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
    if (this.taxon.family != null) {
      this.familyshow = false;
    } else {
      this.familyshow = true;
    }
    this.taxon.genus = null;
    this.taxonService.getGenuss(this.taxon.family).subscribe(data => {
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
    if (this.taxon.genus != null) {
      this.genusshow = false;
    } else {
      this.genusshow = true;
    }
    this.taxonService.getSpecies(this.taxon.genus).subscribe(data => {
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
    this.taxonService.getTaxonomicStatus().subscribe(data => {
      this.taxonomicstatuss = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });

  }
  addPhylum(): void {
    const dialogRef = this.dialog.open(DialogCreatePhylumComponent, {
      width: '350px',
      data: { kingdom: this.taxon.kingdom }
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
      data: { phylum: this.taxon.phylum }
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
      data: { class: this.taxon.class }
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
      data: { order: this.taxon.order }
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
      data: { family: this.taxon.family }
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
      data: { genus: this.taxon.genus }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.specie = result;
      this.postSpecie();

    });
  }
  postPhylum() {
    this.taxonService.postPhylum(this.phylum).subscribe(data => {
      console.log(this.phylum);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getPhylums();
  }
  postClass() {
    this.taxonService.postClass(this.class).subscribe(data => {
      console.log(this.class);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getClasses();
  }
  postOrder() {
    this.taxonService.postOrder(this.order).subscribe(data => {
      console.log(this.order);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getOrders();
  }
  postFamily() {
    this.taxonService.postFamily(this.family).subscribe(data => {
      console.log(this.family);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getFamilys();
  }
  postGenus() {
    this.taxonService.postGenus(this.genus).subscribe(data => {
      console.log(this.genus);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getGenuss();
  }
  postSpecie() {
    this.taxonService.postSpecie(this.specie).subscribe(data => {
      console.log(this.specie);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getSpecies();
  }

}
