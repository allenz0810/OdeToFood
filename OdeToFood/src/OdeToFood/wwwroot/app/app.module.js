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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var index_component_1 = require('./home/index.component');
var create_component_1 = require('./home/create.component');
var details_component_1 = require('./home/details.component');
var map_component_1 = require('./home/map.component');
var search_component_1 = require('./home/search.component');
var login_component_1 = require('./account/login.component');
var home_service_1 = require('./home/home.service');
var account_service_1 = require('./account/account.service');
var core_2 = require('angular2-google-maps/core');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                common_1.CommonModule,
                app_routing_module_1.AppRoutingModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAOjEWu92pzgCd3p3kc8HNnpCIDyDHqiIw'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                index_component_1.HomeIndexComponent,
                create_component_1.HomeCreateComponent,
                details_component_1.HomeDetailsComponent,
                login_component_1.LoginComponent,
                map_component_1.HomeMapComponent,
                search_component_1.HomeSearchComponent
            ],
            providers: [
                home_service_1.HomeService,
                account_service_1.AccountService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map