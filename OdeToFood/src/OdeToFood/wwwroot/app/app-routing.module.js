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
var index_component_1 = require('./home/index.component');
var create_component_1 = require('./home/create.component');
var details_component_1 = require('./home/details.component');
var login_component_1 = require('./account/login.component');
var map_component_1 = require('./home/map.component');
var routes = [
    { path: '', redirectTo: '/Home/Index', pathMatch: 'full' },
    { path: 'Home/Index', component: index_component_1.HomeIndexComponent },
    { path: 'Home/Create', component: create_component_1.HomeCreateComponent },
    { path: 'Home/Map', component: map_component_1.HomeMapComponent },
    { path: 'Home/Details/:id', component: details_component_1.HomeDetailsComponent },
    { path: 'Account/Login', component: login_component_1.LoginComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map