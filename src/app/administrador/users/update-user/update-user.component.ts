import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { RolService } from 'src/app/services/users/rol.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() userid: String;

  userRecord = new FormGroup({
    userid: new FormControl(null),
    rolid: new FormControl(null),
    name: new FormControl(null),
    lastname: new FormControl(null),
    email: new FormControl(null),
    direction: new FormControl(null),
    phone: new FormControl(null),
    password: new FormControl(null),
    state: new FormControl(null),
    url: new FormControl(null),
    created_at: new FormControl(null),
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin') != 'true') {
      this.router.navigate(['/admin']);
    }

    this.userService.getUser(this.route.snapshot.params['userid']).subscribe(data => {
      if (this.userRecord) {
        this.userRecord = new FormGroup({
          userid: new FormControl(data.userid),
          rolid: new FormControl(data.rolid),
          name: new FormControl(data.name),
          lastname: new FormControl(data.lastname),
          email: new FormControl(data.email),
          direction: new FormControl(data.direction),
          phone: new FormControl(data.phone),
          password: new FormControl(data.password),
          state: new FormControl(data.state),
          url: new FormControl(data.url),
          created_at: new FormControl(data.created_at),
        })
      }
    })
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
      this.userService.putUser(this.userRecord.value.userid,this.userRecord.value).subscribe(resultado => {
        this.openSnackBar('ACTUALIZACIÓN EXITOSO', '✅');

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
