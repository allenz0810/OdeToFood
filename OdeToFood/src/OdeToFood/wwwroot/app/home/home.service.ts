﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Restaurant } from './restaurant';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {

    //private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    
    private homeUrl = 'home';  // URL to web api

    constructor(private http: Http) { }

    create(data: Restaurant): Promise<void> {
        let content = new URLSearchParams();
        content.set('name', data.name);
        return this.http
            .post(this.homeUrl + '/Create',
                content.toString(),
                { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

//    var headers = new Headers();
//headers.append('Content-Type', '');
//this.http.post('your-post-url-goes-here',
//    { firstName: 'Joe', lastName: 'Smith' },
//    { headers: headers })
//    .map((res: Response) => res.json())
//    .subscribe((res: Person) => this.postResponse = res);

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}