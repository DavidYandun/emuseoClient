import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,
  MatGridListModule,MatSidenavModule} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,
MatGridListModule,MatSidenavModule,
ScrollDispatchModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,
MatGridListModule,MatSidenavModule,
ScrollDispatchModule],
})
export class MaterialModule { }