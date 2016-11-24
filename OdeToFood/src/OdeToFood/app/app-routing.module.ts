import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from './home/index.component';
import { HomeCreateComponent } from './home/create.component';

const routes: Routes = [
    { path: '', redirectTo: '/app/home/index', pathMatch: 'full' },
    { path: 'app/home/index', component: HomeIndexComponent },
    { path: 'app/home/create', component: HomeCreateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }