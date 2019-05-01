import { Component, OnInit, Input } from '@angular/core';
import { UserService, User } from 'src/app/services/users/user.service';
import { RolService } from 'src/app/services/users/rol.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-control-user',
  templateUrl: './control-user.component.html',
  styleUrls: ['./control-user.component.css']
})
export class ControlUserComponent implements OnInit {
  users: any;
  rols: any;
  user = null;
  editUser: any;
  constructor(
    private userService: UserService,
    private rolService: RolService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUsers();
    this.getRols();
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
        console.log(JSON.stringify(error));
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


  //modal
  openDialogEditUser(user): void {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      width: '400px',
      data: {
        userid: user.userid,
        //rolid: user.rolid,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        direction: user.direction,
        phone: user.phone,
        state: user.state,
        created_at: user.created_at,
        url: user.url
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editUser = result;
      this.updateUser();
      this.getUsers();
    });
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
