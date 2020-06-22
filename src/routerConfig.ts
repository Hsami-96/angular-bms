// routerConfig.ts

import { Routes } from '@angular/router';
import { BmsLoginComponent } from './app/bms-login/bms-login.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: BmsLoginComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export default appRoutes;