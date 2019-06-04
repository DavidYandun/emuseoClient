import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-ficha-multimedia',
  templateUrl: './ficha-multimedia.component.html',
  styleUrls: ['./ficha-multimedia.component.css'],

})


export class FichaMultimediaComponent implements OnInit {
  @Input() identificationid: any;
  multimedia: any;
  fotografia: any;
  video: any;
  audio: any;

  cantidadFotografia: any;
  cantidadVideo: any;
  cantidadAudio: any;

  

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {

    this.multimediaService.getMultimediaIdAll(this.identificationid).subscribe(data => {

      this.multimedia = data;
      this.cantidadFotografia = data.length;
    })

    this.multimediaService.getMultimediaIdAllFotografia(this.identificationid).subscribe(data => {
      this.fotografia = data;
      this.cantidadFotografia = data.length;
    })
    this.multimediaService.getMultimediaIdAllVideo(this.identificationid).subscribe(data => {
      this.video = data;
      this.cantidadVideo = data.length;
    })
    this.multimediaService.getMultimediaIdAllAudio(this.identificationid).subscribe(data => {
      this.audio = data;
      this.cantidadAudio = data.length;
    })
  }
}
