import { Component, OnInit, Input } from '@angular/core';
import { OccurrenceService } from 'src/app/services/dwc_occurrence_services/occurrence.service';

@Component({
  selector: 'app-ficha-occurrence',
  templateUrl: './ficha-occurrence.component.html',
  styleUrls: ['./ficha-occurrence.component.css']
})
export class FichaOccurrenceComponent implements OnInit {
  @Input() identificationid:any;
  occurrence:any;
  constructor(private occurrenceService:OccurrenceService) { }

  ngOnInit() {
    this.getOccurrence();
  }
  getOccurrence() {
    this.occurrenceService.getOccurrenceId(this.identificationid).subscribe(data => {
      this.occurrence = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
