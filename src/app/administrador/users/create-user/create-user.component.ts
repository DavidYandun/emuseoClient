import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { RolService } from 'src/app/services/users/rol.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userRecord = this.formBuilder.group({
    userid: ['', Validators.required],
    rolid: ['', Validators.required],
    name: [''],
    lastname: [''],
    email: ['', Validators.email],
    direction: [''],
    phone: [''],
    password: ['', Validators.min(6)],
    state: [true],
    url: [null],
    created_at: ['']
  });

  user: any;
  rols: any;
  File: File;
  imageSrc: any;
  extension: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private rolService: RolService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin')!='true') {
      this.router.navigate(['/admin']);
    }
    this.getRols();
    
  }

  getRols() {
    this.rolService.getRols().subscribe(data => {
      this.rols = data;
    },
      error => {
        console.log(JSON.stringify(error));
      })
  }

  postUser() {
    this.userService.postUser(this.userRecord.value).subscribe(resultado => {
      this.openSnackBar('REGISTRO EXITOSO', '✅');
      this.user = this.userRecord.value;
    },
      error => {
        this.openSnackBar(error.error.message, '🛑');
        console.log(JSON.stringify(error));
      });
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

  postFile() {
    this.userRecord.value.url = 'api/users/img/' + this.userRecord.value.userid + this.extension;
    
    if (this.userRecord.value.url != null) {
      //registra el el user en la bdd
      this.userService.postUser(this.userRecord.value).subscribe(resultado => {
        this.openSnackBar('REGISTRO EXITOSO', '✅');
        this.user = this.userRecord.value
        this.router.navigate(['control-user'])
      },
        error => {
          this.openSnackBar(error.error.message, '🛑');
          console.log(JSON.stringify(error));
        })

      //sube el archivo al repostitorio
      this.userService.postFile(this.File, this.userRecord.value.userid + this.extension).subscribe(data => {
        if (data.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + Math.round(data.loaded / data.total * 100) + '%');
        } else if (data.type === HttpEventType.Response) {
          console.log(data)
        }
        console.log(data)
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
