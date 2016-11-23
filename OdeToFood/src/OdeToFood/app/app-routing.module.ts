import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from './home/index.component';

const routes: Routes = [
    { path: '', redirectTo: '/app/home/index', pathMatch: 'full' },
    { path: 'app/home/index', component: HomeIndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }