import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-multimedia',
  templateUrl: './ficha-multimedia.component.html',
  styleUrls: ['./ficha-multimedia.component.css']
})
export class FichaMultimediaComponent implements OnInit {
  @Input() identificationid:any;
  constructor() { }

  ngOnInit() {
  }

}
