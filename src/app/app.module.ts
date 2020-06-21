import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BmsLoginComponent } from './bms-login/bms-login.component';
import { BmsLoginModule } from './bms-login/bms-login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BmsLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
