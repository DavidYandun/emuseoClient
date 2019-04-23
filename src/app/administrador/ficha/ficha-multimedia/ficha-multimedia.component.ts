import { Component, OnInit, Input } from '@angular/core';
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
  cantidadImages: any;


  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {

    this.multimediaService.getMultimediaIdAll(this.identificationid).subscribe(data => {
      console.log(data);
      this.multimedia = data;
      this.cantidadImages=data.length;
    })
   
    
  }
}
