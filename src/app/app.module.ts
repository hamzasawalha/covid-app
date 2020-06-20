import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ServicesService } from './shared/services.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { MyCountryComponent } from './pages/my-country/my-country.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MyCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'' , component : MainPageComponent}, 
      {path:'myCountry', component :MyCountryComponent }
    ])

  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
