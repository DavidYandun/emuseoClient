import { Component, OnInit } from '@angular/core';
import { RolService } from '../../services/users/rol.service';
@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  rols: any;
  constructor(private rolService: RolService) { }

  ngOnInit() {
    this.getRols;
  }

  getRols() {
    this.rolService.getRols().subscribe(data => {
      this.rols = data;
    })
  }

}
