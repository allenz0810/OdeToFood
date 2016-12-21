import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from './home/index.component';
import { HomeCreateComponent } from './home/create.component';
import { HomeDetailsComponent } from './home/details.component';
import { LoginComponent } from './account/login.component';


const routes: Routes = [
    { path: '', redirectTo: '/Home/Index', pathMatch: 'full' },
    { path: 'Home/Index', component: HomeIndexComponent },
    { path: 'Home/Create', component: HomeCreateComponent },
    { path: 'Home/Details/:id', component: HomeDetailsComponent },
    { path: 'Account/Login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }