import { Component, OnInit, Input } from '@angular/core';
import { RecordLevelService } from 'src/app/services/dwc_record-level_services/record-level.service';
import { BasisofrecordService } from 'src/app/services/dwc_record-level_services/basisofrecord.service';
import { DialogCreateBasisofrecordComponent } from '../dialog-create-basisofrecord/dialog-create-basisofrecord.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-record-level',
  templateUrl: './update-record-level.component.html',
  styleUrls: ['./update-record-level.component.css']
})
export class UpdateRecordLevelComponent implements OnInit {
  @Input() identificationid: number;


  recordlevel = new FormGroup({
    identificationid: new FormControl(null),
    entidadid: new FormControl(null),
    type: new FormControl(null),
    modified: new FormControl(null),
    language: new FormControl(null),
    license: new FormControl(null),
    rightsholder: new FormControl(null),
    accessrights: new FormControl(null),
    bibliographiccitation: new FormControl(null),
    references: new FormControl(null),
    basisofrecord: new FormControl(null),
    dynamicproperties: new FormControl(null),
  });

  basisofrecords: any;
  basisofrecord: any;
  constructor(
    private formBuilder: FormBuilder,
    private recordLevelService: RecordLevelService,
    private basisofrecordService: BasisofrecordService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recordLevelService.getRecordLevelId(this.route.snapshot.params['identificationid']).subscribe(data => {
      if (this.recordlevel) {
        this.recordlevel = new FormGroup({
          recordlevelid: new FormControl(data.recordlevelid),
          identificationid: new FormControl(data.identificationid),
          entidadid: new FormControl(data.entidadid),
          type: new FormControl(data.type),
          modified: new FormControl(data.modified),
          language: new FormControl(data.language),
          license: new FormControl(data.license),
          rightsholder: new FormControl(data.rightsholder),
          accessrights: new FormControl(data.accessrights),
          bibliographiccitation: new FormControl(data.bibliographiccitation),
          references: new FormControl(data.references),
          basisofrecord: new FormControl(data.basisofrecord),
          dynamicproperties: new FormControl(data.dynamicproperties),
        });
      }
    })
    this.getBasisofrecords();
  }
  updateRecordLevel() {
    if (this.recordlevel.value.identificationid) {
      console.log(this.recordlevel.value);
      this.recordLevelService.putRecordLevel(this.recordlevel.value.recordlevelid, this.recordlevel.value).subscribe(data => {
        this.openSnackBar('ACTUALIZACÓN DE RECORD LEVEL EXITOSO', '✅');
      },
        error => {
          this.openSnackBar(error.error.message, '🛑');
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
      this.openSnackBar('REGISTRO BASIS OF RECORD EXITOSO', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
    this.getBasisofrecords();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
