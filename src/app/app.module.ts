/**
 * References for:
 * Angular Material:
 * https://alligator.io/angular/angular-material-2/
 * https://material.angular.io/
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { RoutingModule } from './routing.module';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from './http-interceptor.service';
import { MaterialModule } from './/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
