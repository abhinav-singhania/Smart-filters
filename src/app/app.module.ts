import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PageHeaderComponent } from './page-header/page-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SmartFiltersComponent } from './smart-filters/smart-filters.component';
import { SmartFilterItemComponent } from './smart-filters/smart-filter-item/smart-filter-item.component';
import { SectorFilterItemComponent } from './smart-filters/sector-filter-item/sector-filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PageHeaderComponent,
    SidenavComponent,
    SmartFiltersComponent,
    SmartFilterItemComponent,
    SectorFilterItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
