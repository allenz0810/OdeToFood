import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeIndexComponent } from './home/index.component';
import { HomeCreateComponent } from './home/create.component';
import { HomeDetailsComponent } from './home/details.component';
import { LoginComponent } from './account/login.component';

import { HomeService } from './home/home.service';
import { AccountService } from './account/account.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAOjEWu92pzgCd3p3kc8HNnpCIDyDHqiIw'
        })
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