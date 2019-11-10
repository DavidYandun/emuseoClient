import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecordLevelService } from 'src/app/services/dwc_record-level_services/record-level.service';
import { BasisofrecordService } from 'src/app/services/dwc_record-level_services/basisofrecord.service';
import { DialogCreateBasisofrecordComponent } from '../dialog-create-basisofrecord/dialog-create-basisofrecord.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-record-level',
  templateUrl: './create-record-level.component.html',
  styleUrls: ['./create-record-level.component.css']
})
export class CreateRecordLevelComponent implements OnInit {
  @Input() identificationid: number;
  @Output() recordlevelBool = new EventEmitter();
  recordlevel = this.formBuilder.group({
    identificationid: [null],
    entidadid: [null],
    type: [null],
    modified: [null],
    language: [null],
    license: [null],
    rightsholder: [null],
    accessrights: [null],
    bibliographiccitation: [null],
    references: [null],
    basisofrecord: [null, Validators.required],
    dynamicproperties: [null]
  });

  basisofrecords: any;
  basisofrecord: any;
  constructor(
    private formBuilder: FormBuilder,
    private recordLevelService: RecordLevelService,
    private basisofrecordService: BasisofrecordService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getBasisofrecords();
  }
  postRecordLevel() {
    this.recordlevel.value.identificationid = this.identificationid;
    if (this.recordlevel.value.identificationid) {
      console.log(this.recordlevel.value);
      this.recordLevelService.postRecordLevel(this.recordlevel.value).subscribe(data => {
        this.recordlevelBool.emit(true);
        this.openSnackBar('REGISTRO DE RECORD LEVEL EXITOSO', '✅');
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
