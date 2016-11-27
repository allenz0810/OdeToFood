import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeIndexComponent } from './home/index.component'
import { HomeCreateComponent } from './home/create.component'
import { HomeService } from './home/home.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeIndexComponent,
        HomeCreateComponent 
    ],
    providers: [HomeService],
    bootstrap: [AppComponent]
})
export class AppModule { }