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
var restaurant_1 = require('./restaurant');
var home_service_1 = require('./home.service');
require('rxjs/add/operator/switchMap');
var Cuisine_1 = require('./Cuisine');
var HomeDetailsComponent = (function () {
    function HomeDetailsComponent(homeService, route, location) {
        var _this = this;
        this.homeService = homeService;
        this.route = route;
        this.location = location;
        this.restaurant = new restaurant_1.Restaurant();
        this.id = 0;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.CuisineEnum = Cuisine_1.CuisineEnum;
        this.setRestaurant = function (data) {
            _this.restaurant = data;
        };
    }
    HomeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.id = param['id'];
        });
        this.homeService.getRestaurant(this.id).then(function (data) { return _this.setRestaurant(data); });
    };
    HomeDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    HomeDetailsComponent = __decorate([
        core_1.Component({
            selector: 'home-detail',
            templateUrl: 'app/home/details.component.html',
            styleUrls: ['app/home/details.component.css']
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.ActivatedRoute, common_1.Location])
    ], HomeDetailsComponent);
    return HomeDetailsComponent;
}());
exports.HomeDetailsComponent = HomeDetailsComponent;
//# sourceMappingURL=details.component.js.map