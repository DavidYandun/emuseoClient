import { Component, OnInit, Input } from '@angular/core';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';
import { Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ficha-multimedia',
  templateUrl: './ficha-multimedia.component.html',
  styleUrls: ['./ficha-multimedia.component.css'],
  
})
export class FichaMultimediaComponent implements OnInit {
  images$: Observable<GalleryItem[]>;
  @Input() identificationid: any;
  private images: GalleryItem[];
  cantidadImages: any;

  
  constructor(private multimediaService: MultimediaService,
    public gallery: Gallery) { }

  ngOnInit() {


    this.multimediaService.getMultimediaIdAll(this.identificationid)
      .subscribe(data => {
        this.images = data.map(item =>
          new ImageItem({ src: item.url,
            thumb: item.url }));
        console.log(this.images);
      })
      this.multimediaService.getMultimediaIdAll(this.identificationid)
      .subscribe(data => {
        this.images = data.map(item =>
          new ImageItem({ src: item.url,
            thumb: item.url }));
        console.log(this.images);
      })
  }
  basicLightboxExample() {
    this.gallery.ref().load(this.images);
  }


}
