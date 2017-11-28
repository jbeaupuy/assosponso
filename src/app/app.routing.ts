import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ToolbarComponent,
        children: [
            {   
                path: '',  pathMatch: 'full',
                redirectTo: '/main'
            },
            {   path: 'main', component: MainComponent },
            {   path: 'account', component: AccountComponent },
            {   path: 'login', component: LoginComponent }
        ]
    },
];

export const routing = RouterModule.forRoot(appRoutes);