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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var home_service_1 = require('./home.service');
require('rxjs/add/operator/switchMap');
var HomeSearchComponent = (function () {
    function HomeSearchComponent(homeService, route, location) {
        this.homeService = homeService;
        this.route = route;
        this.location = location;
    }
    HomeSearchComponent.prototype.ngOnInit = function () {
    };
    HomeSearchComponent.prototype.goBack = function () {
        this.location.back();
    };
    HomeSearchComponent = __decorate([
        core_1.Component({
            selector: 'home-search',
            templateUrl: 'app/home/search.component.html'
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.ActivatedRoute, common_1.Location])
    ], HomeSearchComponent);
    return HomeSearchComponent;
}());
exports.HomeSearchComponent = HomeSearchComponent;
//# sourceMappingURL=search.component.js.map