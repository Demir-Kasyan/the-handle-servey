import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './viscera/environment/modules/design/material.design';
import {HttpClientModule} from '@angular/common/http';

import {NgxElectronModule} from 'ngx-electron';
import {RoutingModule} from './viscera/environment/modules/rooting/routing.module';
import {SharingModule} from './viscera/environment/modules/importing/sharing.module';
import {AppRouterComponent} from './viscera/environment/components/router-c/router.component';

@NgModule({
  declarations: [AppRouterComponent],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RoutingModule,
    CommonModule, NgxElectronModule, SharingModule,
    BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppRouterComponent]
})
export class AppModule {
}
