import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BmsLoginModule } from './bms-login/bms-login.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BmsHomeDashboardModule } from './bms-home-dashboard/bms-home-dashboard.module';
import { BmsNavigationModule } from './bms-navigation/bms-navigation.module';
import { BmsSignupModule } from './bms-signup/bms-signup.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BmsLoginModule,
    BmsHomeDashboardModule,
    BmsNavigationModule,
    BmsSignupModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
