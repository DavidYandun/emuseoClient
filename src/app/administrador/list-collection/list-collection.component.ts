import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';

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

  collection: any;
  public errorMsg;
  constructor(
    private identificationService: IdentificationService) { }

  ngOnInit() {
    this.getCollection();
  }

  getCollection() {
    this.identificationService.getCollection().subscribe(data => {
      this.collection = new MatTableDataSource(data);
      this.collection.paginator = this.paginator;
      this.collection.sort = this.sort;
    },
      error => this.errorMsg = error)
  };

  applyFilter(filterValue: string) {
    this.collection.filter = filterValue.trim().toLowerCase();
    if (this.collection.paginator) {
      this.collection.paginator.firstPage();
    }
  };

  displayedColumnss: string[] = ['identificationid', 'verificationstatus', 'identificationqualifier', 'identifiedby', 'dateidentified', 'identificationremarks'];

  displayedColumns: string[] = [
    'url',
    'scientificname',
    'taxonrank',
    'identifiedby',
    'verificationstatus',
  ];
  /* 'identificationid',
    'verificationstatus',
    'identifiedby',
    'kingdom',
    'phylum',
    'class',
    'order',
    'family',
    'genus',
    'specie',
    'taxonrank',
    'scientificname',
    'vernacularname',

    'typemedia',
    'medianame',
    'url' */
}
