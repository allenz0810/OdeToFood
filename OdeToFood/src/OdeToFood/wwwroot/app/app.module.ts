import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeIndexComponent } from './home/index.component';
import { HomeCreateComponent } from './home/create.component';
import { HomeDetailsComponent } from './home/details.component';
import { LoginComponent } from './account/login.component';

import { HomeService } from './home/home.service';
import { AccountService } from './account/account.service';

// learning https://angular-maps.com/docs/getting-started.html
// another version of google map http://playcode.org/angular-2-typescript-google-maps/
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AgmCoreModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeIndexComponent,
        HomeCreateComponent,
        HomeDetailsComponent,
        LoginComponent
    ],
    providers: [
        HomeService,
        AccountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }