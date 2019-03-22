import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,
  MatGridListModule

} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,
MatGridListModule,
ScrollDispatchModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,
MatGridListModule,
ScrollDispatchModule],
})
export class MaterialModule { }