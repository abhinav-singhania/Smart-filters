import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';

import {
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import {
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatExpansionModule
} from '@angular/material';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

const MaterialModules = [

  OverlayModule,
  DragDropModule,

  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,

  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,

  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatExpansionModule,

  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules]
})
export class MaterialModule { }
