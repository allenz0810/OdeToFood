﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountService {

    //private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    private accounteUrl = 'account';  // URL to web api

    constructor(private http: Http) { }

    login(user: User): void {
        this.http
            .post(this.accounteUrl + '/Login',
            { Username: user.userName, Password : user.password},
            { headers: this.headers });
    }

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