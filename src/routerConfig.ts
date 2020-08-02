// routerConfig.ts

import { Routes } from '@angular/router';
import { BmsLoginComponent } from './app/bms-login/bms-login.component';
import { BmsHomeDashboardComponent } from './app/bms-home-dashboard/bms-home-dashboard.component';
import { AuthGuardService } from './services/authentication-guard.service';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full',
    },
    {
        path: 'signin',
        pathMatch: 'full',
        component: BmsLoginComponent,
    },
    {
        path: 'dashboard',
        component: BmsHomeDashboardComponent,
        canActivate: [AuthGuardService]
    }
];

export default appRoutes;