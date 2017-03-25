import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {SocketService, RestService } from './feathers.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers:    [ SocketService, RestService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
