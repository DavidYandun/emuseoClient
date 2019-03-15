import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RolService } from 'src/app/services/users/rol.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() user: any = {
    rolid: null,
    name: '',
    lastname: '',
    email: '',
    direction: '',
    phone: '',
    state: true,
    url: ''
  };


  rols: any;
  @Output() cerrar= new EventEmitter();

  constructor(private userService: UserService, private rolService: RolService) { }

  ngOnInit() {
    this.getRols();
  }

  updateUser() {
    this.userService.putUser(this.user.userid, this.user).subscribe(data => {
      this.cerrar.emit();
      console.log("modificación correcta");
      
    });
  }

  getRols() {
    this.rolService.getRols().subscribe(data => {
      this.rols = data;
    }, error => {
      console.log(JSON.stringify(error));

    });
  }
  /*onCerrar(){
    this.cerrar.emit();
  }*/
}
