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
var HomeCreateComponent = (function () {
    function HomeCreateComponent(route, location) {
        this.route = route;
        this.location = location;
        this.Data = "This is a data coming from create";
        this.cuisines = [
            { key: "None", value: 0 },
            { key: "Italian", value: 1 },
            { key: "French", value: 2 },
            { key: "Japanese", value: 3 },
            { key: "Amercian", value: 4 }
        ];
    }
    HomeCreateComponent.prototype.ngOnInit = function () {
    };
    HomeCreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    HomeCreateComponent.prototype.add = function (name, cuisine) {
        alert("name: (" + name + "), cuisine: (" + cuisine + ")");
    };
    HomeCreateComponent = __decorate([
        core_1.Component({
            selector: 'home-create',
            templateUrl: 'app/home/create.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location])
    ], HomeCreateComponent);
    return HomeCreateComponent;
}());
exports.HomeCreateComponent = HomeCreateComponent;
//# sourceMappingURL=create.component.js.map