import { Component, OnInit, Input } from '@angular/core';
import { UserService, User } from 'src/app/services/users/user.service';
import { RolService } from 'src/app/services/users/rol.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-control-user',
  templateUrl: './control-user.component.html',
  styleUrls: ['./control-user.component.css']
})
export class ControlUserComponent implements OnInit {
  loggedin = false;
  users: any;
  rols: any;
  user = null;
  editUser: any;
  constructor(
    private userService: UserService,
    private rolService: RolService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.loggedin = true;
    this.getUsers();
    this.getRols();
  } else {
    this.router.navigate(['/admin']);
    this.loggedin = false;
  }
  }


  cambiar(user) {
    for (let rol of this.rols) {
      if (user.rolid == rol.rolid) {
        return rol.name;
      }
    }
  }

  getUsers() {
    this.userService.getUsersRol().subscribe(data => {
      this.users = data;
      for (let user of this.users) {
        if (user.url == null)
          user.url = '../../../../assets/img/perfil.jpg';
      }
    },
      error => {
        console.log(JSON.stringify(error.error.message));
        if(error.error.message=='No Autorizado'){
          this.openSnackBar(error.error.message, '🛑');
          this.router.navigate(['/'])
        }
      });
  }

  getRols() {
    this.rolService.getRols().subscribe(data => {
      this.rols = data;
    }, error => {
      console.log(JSON.stringify(error));

    });
  }

  getUser(user) {
    this.userService.getUser(user.userid).subscribe(data => {
      this.user = data;

    }, error => {
      console.log(JSON.stringify(error));
    });
  }
  cerrarDetalles() {
    this.user = null;
  }


  updateUser() {
    this.userService.putUser(this.editUser.userid, this.editUser).subscribe(data => {
      this.openSnackBar('Actualización exitosa', '✅');
    }, error => {
      this.openSnackBar(error.error.message, '🛑');
    });
  }
 
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
