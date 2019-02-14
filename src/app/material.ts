import {MatButtonModule, MatCheckboxModule,MatMenuModule,MatToolbarModule,MatIconModule,
    MatFormFieldModule,MatInputModule,MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatMenuModule,MatToolbarModule,MatIconModule,
    MatFormFieldModule,MatInputModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,MatMenuModule,MatToolbarModule,MatIconModule,
    MatFormFieldModule,MatInputModule,MatCardModule],
})
export class MaterialModule { }