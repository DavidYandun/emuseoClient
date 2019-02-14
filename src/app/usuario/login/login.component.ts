import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService) { }

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

      if (data) {
        console.log("bien");
      }

      //redirect the person to /admin



    });


  }

}
