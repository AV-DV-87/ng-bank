import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './modules/app-material.module';
import { IcontestComponent } from './icontest/icontest.component';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule, MatSortModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    IcontestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
