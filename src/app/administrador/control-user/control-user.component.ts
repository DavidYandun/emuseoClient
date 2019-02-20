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
  rols:any;
  
  constructor(private userService: UserService, private rolService: RolService) { }

  ngOnInit() {
    this.getUsers();
    this.getRols();
  }
  
  getUsers() {
    var rolName:string;
    this.userService.getUser().subscribe(data => {
      this.users = data;
      for(let rol of this.rols){
        if(data.rolid==rol.rolid){
            rolName=rol.name;
        }
      }

    },
      error => {
        console.log(JSON.stringify(error));

      });
  }

  getRols(){
    this.rolService.getRol().subscribe(data=>{
      this.rols=data;
    })
  }
}
