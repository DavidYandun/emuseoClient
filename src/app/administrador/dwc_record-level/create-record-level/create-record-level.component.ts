import { Component, OnInit, Input } from '@angular/core';
import { RecordLevelService } from 'src/app/services/dwc_record-level_services/record-level.service';
import { BasisofrecordService } from 'src/app/services/dwc_record-level_services/basisofrecord.service';
import { DialogCreateBasisofrecordComponent } from '../dialog-create-basisofrecord/dialog-create-basisofrecord.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-record-level',
  templateUrl: './create-record-level.component.html',
  styleUrls: ['./create-record-level.component.css']
})
export class CreateRecordLevelComponent implements OnInit {
  @Input() identificationid: number;
  recordlevel: any = {
    identificationid: null,
    entidadid: null,
    type: null,
    modified: null,
    language: null,
    license: null,
    rightsholder: null,
    accessrights: null,
    bibliographiccitation: null,
    references: null,
    basisofrecord: null,
    dynamicproperties: null
  }
  basisofrecords: any;
  basisofrecord: any;
  constructor(private recordLevelService: RecordLevelService,
    private basisofrecordService: BasisofrecordService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getBasisofrecords();
  }
  postRecordLevel() {
    this.recordlevel.identificationid = this.identificationid;
    if (this.recordlevel.identificationid) {
      this.recordLevelService.postRecordLevel(this.recordlevel).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(JSON.stringify(error));
        });
    }
  }
  getBasisofrecords() {
    this.basisofrecordService.getBasisofrecords().subscribe(data => {
      this.basisofrecords = data;
    },
      error => {
        console.log(JSON.stringify(error));
      })
  }

  addBasisofRecord(): void {
    const dialogRef = this.dialog.open(DialogCreateBasisofrecordComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.basisofrecord = result;
      this.postBasisofRecord();
    });
  }
  postBasisofRecord() {
    this.basisofrecordService.postBasisofrecord(this.basisofrecord).subscribe(data => {
      console.log(this.basisofrecord);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.getBasisofrecords();
  }
}
