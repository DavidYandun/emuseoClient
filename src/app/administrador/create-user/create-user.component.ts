import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userRecord: any = {
    userid: '',
    rolid: null,
    name: '',
    lastname: '',
    email: '',
    direction: '',
    phone: '',
    password: '',
    state: true,
    created_at: ''
  };

  rols: any;
  constructor(private userService: UserService, private rolService: RolService) { }

  ngOnInit() {
    this.getRols();

  }

  getRols() {
    this.rolService.getRol().subscribe(data => {
      this.rols = data;
    },
      error => {
        console.log(JSON.stringify(error));

      })
  }

  postUser() {

    this.userService.postUser(this.userRecord).subscribe(resultado => {
      console.log(this.userRecord)
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
