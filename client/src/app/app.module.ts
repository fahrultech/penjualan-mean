import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatabarangComponent } from './barang/databarang/databarang.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import * as $ from 'jquery'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DatabarangComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSlimScrollModule
  ],
  providers: [
    {
      provide: SLIMSCROLL_DEFAULTS,
      useValue: {
        alwaysVisible: false,
        gridOpacity: '0.2', barOpacity: '0.5',
        gridBackground: '#fff',
        gridWidth: '6',
        gridMargin: '2px 2px',
        barBackground: '#fff',
        barWidth: '20',
        barMargin: '2px 2px'
      }

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
