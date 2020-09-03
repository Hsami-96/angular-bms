import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BmsLoginComponent } from './bms-login/bms-login.component';
import { BmsHomeDashboardComponent } from './bms-home-dashboard/bms-home-dashboard.component';
import { AuthGuardService } from 'src/services/authentication-guard.service';
import { BmsSignupComponent } from './bms-signup/bms-signup.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/signin',
      pathMatch: 'full'
  },
  {
      path: 'signin',
      pathMatch: 'full',
      component: BmsLoginComponent
  },
  {
      path: 'dashboard',
      component: BmsHomeDashboardComponent,
      canActivate: [AuthGuardService]
  },
  {
      path: 'signup',
      pathMatch: 'full',
      component: BmsSignupComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }