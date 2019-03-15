import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule

} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule],
})
export class MaterialModule { }