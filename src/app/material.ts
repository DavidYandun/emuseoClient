import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule, MatStepperModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatListModule,
  MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule,
  MatGridListModule, MatSidenavModule, MatExpansionModule, MatSnackBarModule
} from '@angular/material';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

// For MDB Angular Free
import { CarouselModule, WavesModule, ButtonsModule, CollapseModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';
import { GALLERY_CONFIG } from '@ngx-gallery/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule, MatStepperModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatListModule,
    MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatExpansionModule, MatSnackBarModule,
    MatGridListModule, MatSidenavModule, CarouselModule, WavesModule, ButtonsModule, CollapseModule,
    ScrollDispatchModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule, MatStepperModule, MatSnackBarModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatListModule,
    MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatExpansionModule,
    MatGridListModule, MatSidenavModule, CarouselModule, WavesModule, ButtonsModule, CollapseModule,
    ScrollDispatchModule],
  providers: [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    }
  ]
})
export class MaterialModule { }