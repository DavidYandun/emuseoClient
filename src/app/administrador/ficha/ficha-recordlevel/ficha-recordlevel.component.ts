import { Component, OnInit ,Input} from '@angular/core';
import { RecordLevelService } from 'src/app/services/dwc_record-level_services/record-level.service';

@Component({
  selector: 'app-ficha-recordlevel',
  templateUrl: './ficha-recordlevel.component.html',
  styleUrls: ['./ficha-recordlevel.component.css']
})
export class FichaRecordlevelComponent implements OnInit {
@Input() identificationid:any;
recordlevel:any;
  constructor( private recordlevelService:RecordLevelService) { }

  ngOnInit() {
    this.getRecordLevel();
  }
  getRecordLevel() {
    this.recordlevelService.getRecordLevelId(this.identificationid).subscribe(data => {
      this.recordlevel = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
