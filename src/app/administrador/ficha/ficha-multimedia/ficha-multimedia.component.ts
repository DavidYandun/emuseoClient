import { Component, OnInit, Input } from '@angular/core';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';


@Component({
  selector: 'app-ficha-multimedia',
  templateUrl: './ficha-multimedia.component.html',
  styleUrls: ['./ficha-multimedia.component.css']
})
export class FichaMultimediaComponent implements OnInit {
  @Input() identificationid: any;
  images: any;
  cantidadImages:any;
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {
    this.multimediaService.getMultimediaIdAll(this.identificationid).subscribe(data => {
      this.images = data;
      this.cantidadImages=this.images.length;
    })
  }

}
