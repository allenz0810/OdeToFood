import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'account-login',
    templateUrl: 'app/account/login.component.html'
})
export class LoginComponent implements OnInit {


    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }
}