import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router:Router) { }

  ngOnInit() {
  }
  usuario: any = { email: '', password: '' };
  //error de correo incorrecto
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    return this.email.hasError('required') ? 'Ingrese un email' :
      this.email.hasError('email') ? 'email invalido' : '';
  }

  //crear nuevo usuario

  loginUser() {
    this.Auth.getUserDetails(this.usuario).subscribe(data => {
      console.log(data);

      if (data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      }

      //redirect the person to /admin

    });


  }

}
