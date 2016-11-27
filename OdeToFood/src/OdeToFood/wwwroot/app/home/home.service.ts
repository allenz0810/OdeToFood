import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HomeService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'app/home';  // URL to web api

    constructor(private http: Http) { }
}