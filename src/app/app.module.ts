import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GermanComponent } from './german/german.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { ItalianComponent } from './italian/italian.component';
import { PorscheComponent } from './german/porsche/porsche.component';
import { MercedesComponent } from './german/mercedes/mercedes.component';
import { AudiComponent } from './german/audi/audi.component';
import { FerrariComponent } from './italian/ferrari/ferrari.component';
import { LanciaComponent } from './italian/lancia/lancia.component';
import { LamborghiniComponent } from './italian/lamborghini/lamborghini.component';
import { NissanComponent } from './japanese/nissan/nissan.component';
import { AcuraComponent } from './japanese/acura/acura.component';
import { ToyotaComponent } from './japanese/toyota/toyota.component';

@NgModule({
  declarations: [
    AppComponent,
    GermanComponent,
    JapaneseComponent,
    ItalianComponent,
    PorscheComponent,
    MercedesComponent,
    AudiComponent,
    FerrariComponent,
    LanciaComponent,
    LamborghiniComponent,
    NissanComponent,
    AcuraComponent,
    ToyotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
>>>>>>> 5c88925dc02647c58aff11a445ae19483214c383
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
