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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        //private headers = new Headers({ 'Content-Type': 'application/json' });
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.homeUrl = 'home'; // URL to web api
    }
    HomeService.prototype.create = function (data) {
        var _this = this;
        var content = new http_1.URLSearchParams();
        content.set('name', data.name);
        content.set('cuisine', data.cuisine.toString());
        return this.http
            .post(this.homeUrl + '/Create', content.toString(), { headers: this.headers })
            .toPromise()
            .then(function (src) { return _this.extractData(src); })
            .catch(function (err) { return _this.handleError(err); });
    };
    HomeService.prototype.getAll = function () {
        var _this = this;
        return this.http
            .get(this.homeUrl + '/GetAll', { headers: this.headers })
            .toPromise()
            .then(function (src) { return _this.extractData(src); })
            .catch(function (err) { return _this.handleError(err); });
    };
    HomeService.prototype.getRestaurant = function (restaurantId) {
        var _this = this;
        var content = new http_1.URLSearchParams();
        content.set('restaurantId', restaurantId.toString());
        return this.http
            .post(this.homeUrl + '/Get', content.toString(), { headers: this.headers })
            .toPromise()
            .then(function (src) { return _this.extractData(src); })
            .catch(function (err) { return _this.handleError(err); });
    };
    HomeService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    HomeService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map