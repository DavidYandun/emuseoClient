import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-control-user',
  templateUrl: './control-user.component.html',
  styleUrls: ['./control-user.component.css']
})
export class ControlUserComponent implements OnInit {
  users: any;
  rols: any;
  user = null;
  constructor(private userService: UserService, private rolService: RolService) { }

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
}
