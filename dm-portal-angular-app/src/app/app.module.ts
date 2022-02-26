import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MonstersModule } from './monsters/monsters.module';
import { MaterialModule } from './material/material.module';
import { CommonLogicModule } from './common/common-logic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MonstersModule,
    HttpClientModule,
    MaterialModule,
    CommonLogicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
