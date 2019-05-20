import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MultimediaService } from 'src/app/services/mul_multimedia_service/multimedia.service';
import { HttpEventType } from '@angular/common/http';
import { TaxonService, Taxon } from 'src/app/services/dwc_taxon_services/taxon.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-create-multimedia',
  templateUrl: './create-multimedia.component.html',
  styleUrls: ['./create-multimedia.component.css']
})
export class CreateMultimediaComponent implements OnInit {
  @Input() identificationid: number;
  multimediaList: any;
  multimedia = this.formBuilder.group({
    identificationid: null,
    typemedia: null,
    name: null,
    url: null,
    author: null,
    principal: true
  });
  extension: any;
  max: number;

  galeria = false;
  typemedias: any;
  File: File;
  imageSrc: any;
  constructor(
    private formBuilder: FormBuilder,
    private multimediaService: MultimediaService,
    private taxoService: TaxonService,
    private snackBar: MatSnackBar
  ) { }


  ngOnInit() {
    this.cargarImagenes();
  }

  cargarImagenes() {
    this.multimediaService.getMultimediaIdAll(this.identificationid).subscribe(data => {
      this.multimediaList = data;
      console.log(data);

      if (data.length > 0) this.galeria = true;
    })
    this.getTypeMedias();
    this.getMax();
    this.File = null;
  }
  imagenPrincipal(multimedia) {
    
    this.multimediaService.getPrincipal(this.identificationid).subscribe(data => {
      data.principal = false;
      this.multimediaService.putMultimedia(data.multimediaid, data).subscribe(data => {   
        this.cargarImagenes();
      })
    });
    multimedia.principal = true;
    this.multimediaService.putMultimedia(multimedia.multimediaid, multimedia).subscribe(data => {
      this.cargarImagenes();
      this.openSnackBar('CAMBIO DE IMAGEN PRINCIPAL', '✅');
    })
  }

  onFileSelected(file: any) {
    this.File = file.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(this.File);

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
    this.multimedia.value.identificationid = this.identificationid;
    if (this.multimedia.value.identificationid) {
      //identifica si es la primera imagen o no
      this.multimediaService.getMultimediaId(this.multimedia.value.identificationid).subscribe(data => {
        if (data) {
          this.multimedia.value.principal = false;
        } else { this.multimedia.value.principal = true; }
      })

      //registra contenido multimedia
      ////consulta nombre del taxon

      this.taxoService.getTaxonId(this.multimedia.value.identificationid).subscribe(data => {
        //asigna nombre del archivo multimedia
        this.multimedia.value.name = data.scientificname
        //condiciona si no tiene nombre no registra en la BDD ni sube la imagen
        if (this.multimedia.value.name != null && this.multimedia.value.principal != null) {
          this.multimedia.value.url = 'api/multimedia/img/' + this.multimedia.value.name + this.max + this.extension;
          //registra el campo multimedia en la bdd
          this.multimediaService.postMultimedia(this.multimedia.value).subscribe(resultado => {
            console.log(resultado)
          },
            error => {
              console.log(JSON.stringify(error))
            })
          //asigna el nombre de la imagen

          //sube el archivo al repostitorio
          this.multimediaService.postFile(this.File, this.multimedia.value.name + this.max + this.extension).subscribe(data => {
            this.cargarImagenes()
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

  deleteMultimedia(multimediaid: any) {
    console.log(multimediaid);

    this.multimediaService.deleteMultimedia(multimediaid).subscribe(data => {
      console.log(data);
      this.cargarImagenes();
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
  ];
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;


  showMessage(message: any) {
    console.log(message);
  }

}
