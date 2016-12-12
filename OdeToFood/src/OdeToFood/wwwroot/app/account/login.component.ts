/// <reference path="user.ts" />
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user'
import { AccountService } from './Account.Service'

@Component({
    selector: 'account-login',
    templateUrl: 'app/account/login.component.html'
})
export class LoginComponent implements OnInit {

    user = new User();

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private accountService : AccountService
    ) { }

    onSubmit() {
        this.accountService.login(this.user);
    }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }
}