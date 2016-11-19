import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from './home/index.component';

const routes: Routes = [
    { path: '', redirectTo: '/home/index', pathMatch: 'full' },
    { path: 'home/index', component: HomeIndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
