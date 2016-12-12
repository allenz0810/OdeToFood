"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="user.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var user_1 = require('./user');
var Account_Service_1 = require('./Account.Service');
var LoginComponent = (function () {
    function LoginComponent(route, location, accountService) {
        this.route = route;
        this.location = location;
        this.accountService = accountService;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.onSubmit = function () {
        this.accountService.login(this.user);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.goBack = function () {
        this.location.back();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'account-login',
            templateUrl: 'app/account/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, Account_Service_1.AccountService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map