import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';

declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');
interface prueba {
  kingdom: string,
  phylum: string
}

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class ListCollectionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  loggedin = false;
  collection: any;
  collectionPDF: any;
  multimedia: Array<any> = new Array;

  displayedColumns: string[];

  public errorMsg;
  constructor(
    private identificationService: IdentificationService,
    private multimediaService: MultimediaService) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
      this.getCollection();
      this.displayedColumns = [
        'url',
        'kingdom',
        'scientificname',
        'taxonrank',
        'identifiedby',
        'verificationstatus',
      ];
    } else {
      this.loggedin = false;
      this.getCollectionAprobado();
      this.displayedColumns = [
        'url',
        'kingdom',
        'scientificname',
        'taxonrank',
        'identifiedby',
      ];
    }
    this.getCollectionPDF();


  }
  getFoto(identificationid) {
    for (let media of this.multimedia) {
      if (media.identificationid == identificationid) {
        return media.url;
        break;
      }
    }
  }
  getCollection() {
    this.identificationService.getCollection().subscribe(data => {
      this.collection = new MatTableDataSource(data);
      this.collection.paginator = this.paginator;
      this.collection.sort = this.sort;
      for (let d of data) {
        this.multimediaService.getPrincipal(d.identificationid).subscribe(dato => {
          this.multimedia.push(dato);
        }, error => {
          let media: any = {
            identificationid: d.identificationid,
            url: '../../../assets/img/'+d.kingdom+'.png'
          }
          this.multimedia.push(media);
        });
      }
    },
      error => this.errorMsg = error)
  };
  getCollectionAprobado() {
    this.identificationService.getCollectionAprobado().subscribe(data => {
      this.collection = new MatTableDataSource(data);
      this.collection.paginator = this.paginator;
      this.collection.sort = this.sort;
      for (let d of data) {
        this.multimediaService.getPrincipal(d.identificationid).subscribe(dato => {
          this.multimedia.push(dato);
        }, error => {
          let media: any = {
            identificationid: d.identificationid,
            url: '../../../assets/img/sin_animal.png'
          }
          this.multimedia.push(media);
        });
      }
    },
      error => this.errorMsg = error)
  };
  getCollectionPDF() {
    this.identificationService.getCollectionPDF().subscribe(data => {
      this.collectionPDF = new MatTableDataSource(data);
      this.collectionPDF.paginator = this.paginator;
      this.collectionPDF.sort = this.sort;
    })
  };
  applyFilter(filterValue: string) {
    this.collection.filter = filterValue.trim().toLowerCase();
    if (this.collection.paginator) {
      this.collection.paginator.firstPage();
    }

    this.collectionPDF.filter = filterValue.trim().toLowerCase();
    if (this.collectionPDF.paginator) {
      this.collectionPDF.paginator.firstPage();
    }
  };
  exito() {
    console.log('exito');

  }
  downloadPDF() {
    const doc = new jsPDF('landscape');

    //encabezado
    var logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAABsCAYAAABwzedDAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBtJREFUeNrs3U2O0zAYBuBplC1LrjV3YRAcAgkOM9ea5RygqEJFBaUdx7Gdz87zbGBTN7a/vHH+Oqfz+fx08frp85//ACx4fn87Xf6dDAWwhtAAhAYgNAChAQgNQGgACA1AaABCAxAagNAAhAaA0ACEBiA0gOBO1x/hoW89/IjS9UdcsNIAhAaA0ACEBiA0AKEBjGO+/qfHv3uy5Rbe0fobXW/zsXUueq4/Kw04yE7v9AQEh9AAwSE0QHAIDeDIwSE0QHAIDRAcQgMEh9AAwSE0gOGDQ2iA4BAaIDiEBggOoQGCQ2gAwweH0ADBITQAoQEIDUBoAEIDQGgAQgMQGoDQiOHIf7MChAYgNKwYQGiECQ5BA05PkoNAYIDQSA4EgQFlzCN15jYYnt/fToKCmo5aY8PePREYtAoOoQEIDqEBgkNogOAQGiA4hAYIDqEBHDk4hAYgNMBqQ2iA4BAaIDiEBgqP4edvUpQgOKw0FBvmsk1oKE5FhjldvdJQpIoLHpk/Kla/SyEoqDPPve5bp/NZJgAbTk8AhAYgNAChAQgNQGgAQgNAaABCAxAagNAAhAaA0ABynF6+fPvnNdefv378fTX768v3rFdgb9tIsfQ9H7VRetta9DWnn63ljsNHfUlpd83nU8Zt7WfubWPpWsyZ863jV7LG55qFlzOxrXaKUjvr1vYun48WHHuFUOm56WFMSu7otcbv/3anKAXT0xE1p73IYxFtjI80Vo/6GnX8ptEGjDFCea8V6B7bstR+xPG7trn69GTreWtNpbetVV8jn6KU3q6l9kY8QNTqZ+l2c2o89N2TksXUovitmh73996YjX4N47afKRfic8avZRhPIwSC5XyfR94oK5CU79n7ALZHsN77zilSUR3piHOkQOytv73WYqvgLXLLde2Grb2NVGICW98tSVlq9rC6SN3G6xzVOr+OsMIree1pzfzvFWD3tm+uOcitO7tXMJTaMUZ/ZoN4p6k53xfi9OR2R2m107grQJRa7G1s5ppfsnTkzNmRRj0CLy1R1/a1xOPFjupqseo1jbX3dVMGeY8jcunJT22vt9XH0XaQCM8aRa2Ra43PvXQ4Zads9TJa61t0va+etuywtUJry/yUOOBEqY+cGm96TWOvgdrzwa6eC2rv/mwZ55HGcMudutwxfPS5+ekgSq+CHrXXsmBHOX3IuW3fa997CbR7NT7vOVBrr3X0XCiR39lpeT7cov85bxy3qsWUR8RzLpC3rKGqz2mQn+hRAjLnuZx7R6il33vI/eGbte2NsJpY299a9TO32CFaHbGiFssRb9GVPn3b2l7kOVjatsj9nVoMRu6O1NsFxx6eSI1ySpbzuRLtlazFWq+61xq/UjU5RSuYI5+i6Ffe27A9jmvqS3ER+/tbgAEAt6INWG3o9zkAAAAASUVORK5CYII=';
    doc.rect(5, 5, 285, 20);
    doc.setFont("helvetica");
    doc.setFontStyle("bold");
    doc.setFontSize(18);
    doc.text('Universidad Técnica del Norte', 105, 15, 'center');
    doc.addImage(logo, 'JPEG', 15, 8, 25, 14);
    //titulo
    doc.setFontSize(22);
    doc.text('Reporte Colección', 10, 35)

    var columns = [['ID', 'Nombre Científico', 'Nombre Común', 'Rango del Taxón', 'Reino', 'Filo', 'Clase', 'Orden', 'Familia', 'Género', 'Especie']];

    var data = [];

    for (let d of this.collection.filteredData) {
      data.push(
        {
          0: d.identificationid,
          1: d.scientificname,
          2: d.vernacularname,
          3: d.taxonrank,
          4: d.kingdom,
          5: d.phylum,
          6: d.class,
          7: d.order,
          8: d.family,
          9: d.genus,
          10: d.specie
        }
      )
    }

    doc.autoTable({
      head: columns,
      body: data,
      margin: { top: 50 },
      columnStyles: {
        0: { halign: 'center', minCellWidth: 10 },
        4: { halign: 'center', minCellWidth: 20 },
      }

    })

    doc.save('Reporte_coleccion.pdf');
  }



}
