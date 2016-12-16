import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';
import { HomeService } from './home.service';

@Component({
    selector: 'home-create',
    templateUrl: 'app/home/create.component.html'
})
export class HomeCreateComponent implements OnInit {

    restaurant = new Restaurant();

    Data: string = "This is a data coming from create";
    cuisines: KeyValuePair<number>[] = [
        { key: "None", value: 0 },
        { key: "Italian", value: 1 },
        { key: "French", value: 2 },
        { key: "Japanese", value: 3 },
        { key: "Amercian", value: 4 }
    ];

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.homeService.create(this.restaurant).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

    add(name: string, cuisine: string): void {
        alert("name: (" + name + "), cuisine: (" + cuisine + ")");
    }
}