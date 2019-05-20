import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  user: any;
  constructor(
    private userService: UserService,
    private authService: AuthService) { }

  ngOnInit() {
    this.userService.getPerfil(sessionStorage.getItem('email')).subscribe(data => {
      this.user = data;
      if (this.user.url == null)
        this.user.url = '../../../../assets/img/perfil.jpg';
    }, error => {
      console.log(error);

    });


  }

  logout() {
    this.authService.logout().subscribe(data => {
      console.log(data);
    });


  }

}
