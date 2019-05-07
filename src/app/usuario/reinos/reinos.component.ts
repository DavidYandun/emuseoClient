import { Component, OnInit, Input } from '@angular/core';
import { IdentificationService } from 'src/app/services/dwc_identification_services/identification.service';
import { ActivatedRoute } from '@angular/router';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';

@Component({
  selector: 'app-reinos',
  templateUrl: './reinos.component.html',
  styleUrls: ['./reinos.component.css']
})

export class ReinosComponent implements OnInit {

  loggedin = false;
  kingdom: any;
  collection: any;
  errorMsg: any;
  multimedia: Array<any> = new Array;

  constructor(
    private multimediaService: MultimediaService,
    private identificationService: IdentificationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
    this.getCollection();

  }

  getCollection() {
    this.kingdom = this.route.snapshot.params['kingdom'];
    this.identificationService.getReinos(this.kingdom).subscribe(data => {
      this.collection = data;
      for (let d of this.collection) {
        this.multimediaService.getMultimediaId(d.identificationid).subscribe(dato => {
          this.multimedia.push(dato);
        }, error => {
          let media: any = {
            identificationid: d.identificationid,
            url: '../../../assets/img/sin_animal.png'
          }
          this.multimedia.push(media);
        });
      }
      console.log(this.collection);
    }, error => this.errorMsg = error);


  };

  getFoto(identificationid) {
    for (let media of this.multimedia) {
      if (media.identificationid == identificationid) {
        return media.url;
        break;
      }
    }
  }

}
