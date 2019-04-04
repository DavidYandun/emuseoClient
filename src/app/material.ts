import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,
  MatGridListModule,MatSidenavModule,MatExpansionModule} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

// For MDB Angular Free
import { CarouselModule, WavesModule,ButtonsModule, CollapseModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatExpansionModule,
MatGridListModule,MatSidenavModule,CarouselModule,WavesModule,ButtonsModule, CollapseModule,
ScrollDispatchModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule,MatStepperModule,
  MatTableModule,MatPaginatorModule,MatSortModule,MatDividerModule,MatListModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatExpansionModule,
MatGridListModule,MatSidenavModule,CarouselModule,WavesModule,ButtonsModule, CollapseModule,
ScrollDispatchModule],
})
export class MaterialModule { }