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
    function HomeCreateComponent() {
    }
    HomeCreateComponent = __decorate([
        core_1.Component({
            selector: 'home-create',
            templateUrl: 'app/home/create.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCreateComponent);
    return HomeCreateComponent;
}());
exports.HomeCreateComponent = HomeCreateComponent;
var restaurant = {};
Data: string = "This is a data coming from create";
cuisines: KeyValuePair < number > [];
[
    { key: "None", value: 0 },
    { key: "Italian", value: 1 },
    { key: "French", value: 2 },
    { key: "Japanese", value: 3 },
    { key: "Amercian", value: 4 }
];
constructor(private, route, router_1.ActivatedRoute, private, location, common_1.Location);
{ }
ngOnInit();
void {};
goBack();
void {
    this: .location.back()
};
add(name, string, cuisine, string);
void {
    alert: function () { }, "name: (": +name + "), cuisine: (" + cuisine + ")"
};
//# sourceMappingURL=create.component.js.map