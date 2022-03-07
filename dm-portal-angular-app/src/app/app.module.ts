import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MonstersModule } from './monsters/monsters.module';
import { MaterialModule } from './material/material.module';
import { CommonLogicModule } from './common/common-logic.module';
import { HttpCache, HttpCacheService } from './config/interceptors/http-cache.service';
import { CacheInterceptor } from './config/interceptors/cache.interceptor';
import { LoggingInterceptor } from './config/interceptors/logging.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
];

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
  providers: [
    httpInterceptorProviders,
    HttpCacheService,
    { provide: HttpCache, useClass: HttpCacheService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
