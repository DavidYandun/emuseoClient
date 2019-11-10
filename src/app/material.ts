import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

// For MDB Angular Free
import { CarouselModule, WavesModule, ButtonsModule, CollapseModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';
import { GALLERY_CONFIG } from '@ngx-gallery/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule, MatStepperModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatListModule,MatButtonToggleModule,
    MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatExpansionModule, MatSnackBarModule,
    MatGridListModule, MatSidenavModule, CarouselModule, WavesModule, ButtonsModule, CollapseModule,
    ScrollDispatchModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule, MatStepperModule, MatSnackBarModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatListModule,MatButtonToggleModule,
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