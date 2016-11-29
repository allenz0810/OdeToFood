import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';

@Component({
    selector: 'home-create',
    templateUrl: 'app/home/create.component.html'
})
export class HomeCreateComponent implements OnInit {
    restaurant: Restaurant;
    Data: string = "This is a data coming from create";
    cuisines: KeyValuePair<number>[] = [
        { key: "None", value: 0 },
        { key: "Italian", value: 1 },
        { key: "French", value: 2 },
        { key: "Japanese", value: 3 },
        { key: "Amercian", value: 4 }
    ];

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }

    add(name: string, cuisine: string): void {
        alert("name: (" + name + "), cuisine: (" + cuisine + ")");
    }
}