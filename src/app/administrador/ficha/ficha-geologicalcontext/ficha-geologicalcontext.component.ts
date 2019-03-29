import { Component, OnInit, Input } from '@angular/core';
import { GeologicalcontextService } from 'src/app/services/dwc_geologicalcontext_service/geologicalcontext.service';

@Component({
  selector: 'app-ficha-geologicalcontext',
  templateUrl: './ficha-geologicalcontext.component.html',
  styleUrls: ['./ficha-geologicalcontext.component.css']
})
export class FichaGeologicalcontextComponent implements OnInit {
  @Input() identificationid: any;
  geologicalcontext: any;
  constructor(private geologicalcontextService: GeologicalcontextService) { }

  ngOnInit() {
    this.getGeologicalContext();
  }
  getGeologicalContext() {
    this.geologicalcontextService.getGeologicalcontextId(this.identificationid).subscribe(data => {
      this.geologicalcontext = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
