import { Component, OnInit } from '@angular/core';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';
import { HttpEventType } from '@angular/common/http';
import { TaxonService, Taxon } from 'src/app/services/dwc_taxon_services/taxon.service';

@Component({
  selector: 'app-create-multimedia',
  templateUrl: './create-multimedia.component.html',
  styleUrls: ['./create-multimedia.component.css']
})
export class CreateMultimediaComponent implements OnInit {
  multimedia: any = {
    identificationid: null,
    typemedia: null,
    name: null,
    url: null,
    author: null
  }
  extension: any;
  max: number;
  typemedias: any;
  File: File;

  constructor(private multimediaService: MultimediaService, private taxoService: TaxonService) { }

  ngOnInit() {
    this.getTypeMedias();
    this.getMax();
  }

  onFileSelected(file: any) {
    this.File = file.target.files[0];
    if (this.File.name.substr(-3, 1) == '.') {
      this.extension = this.File.name.substr(-3);
    } else if (this.File.name.substr(-4, 1) == '.') {
      this.extension = this.File.name.substr(-4);
    } else {
      this.extension = this.File.name.substr(-5);
    }
  }
  getTypeMedias() {
    this.multimediaService.getTypeMedias().subscribe(data => {
      this.typemedias = data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  getMax() {
    this.multimediaService.getMax().subscribe(data => {
      this.max = data.multimediaid + 1;
    })
  }

  postFile() {

    //registra contenido multimedia
    ////consulta nombre del taxon
    this.taxoService.getTaxonId(this.multimedia.identificationid).subscribe(data => {
      //asigna nombre del archivo multimedia
      this.multimedia.name = data.scientificname
      //condiciona si no tiene nombre no registra en la BDD ni sube la imagen
      if (this.multimedia.name != null) {
        //registra el campo multimedia en la bdd
        this.multimediaService.postMultimedia(this.multimedia).subscribe(resultado => {
          console.log(resultado)
        },
          error => {
            console.log(JSON.stringify(error))
          })
        //asigna el nombre de la imagen
        //let name: string;
        //sube el archivo al repostitorio


        this.multimediaService.postFile(this.File, this.multimedia.name + this.max + this.extension).subscribe(data => {
          if (data.type === HttpEventType.UploadProgress) {
            console.log('Upload Progress: ' + Math.round(data.loaded / data.total * 100) + '%');
          } else if (data.type === HttpEventType.Response) {
            console.log(data)
          }
          console.log(data)
        })
      }
      console.log(data.scientificname)
    })





  }



}
