import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  @Input() user: any = null;
  @Output() cerrar= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
onCerrar(){
  this.cerrar.emit();
}
}
