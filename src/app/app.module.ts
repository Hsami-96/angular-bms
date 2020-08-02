import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BmsLoginModule } from './bms-login/bms-login.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import appRoutes from 'src/routerConfig';
import { BmsHomeDashboardModule } from './bms-home-dashboard/bms-home-dashboard.module';
import { BmsNavigationComponent } from './bms-navigation/bms-navigation.component';
import { BmsNavigationModule } from './bms-navigation/bms-navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BmsLoginModule,
    BmsHomeDashboardModule,
    BmsNavigationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
