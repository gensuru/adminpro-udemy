import { RouterModule ,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRouter: Routes = [
    {path: '',
       component: PagesComponent,
       children: [
     {path: 'dashboard', component: DashboardComponent},
     {path: 'progress', component: ProgressComponent},
     {path: 'graficas1', component: Graficas1Component},
     {path: 'account-settings', component: AccountSettingsComponent},
     {path: '', pathMatch: 'full', redirectTo: '/dashboard'}
   ]},
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRouter);