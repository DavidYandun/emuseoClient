import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
//import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. 

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //matcher = new MyErrorStateMatcher();
  constructor(
    private formBuilder: FormBuilder,
    private Auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  user = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });
  //error de correo incorrecto
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl(['', Validators.required,Validators.minLength(6)]);
  hide = true;

  //crear nuevo user

  loginUser() {
    this.Auth.getUserDetails(this.user.value).subscribe(data => {
      this.openSnackBar(data.message,'')
      if (data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
        sessionStorage.setItem('email', this.user.value.email);
      }
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
      console.log(JSON.stringify(error));
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
