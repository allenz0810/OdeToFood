﻿import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';
import { HomeService } from './home.service';

@Component({
    selector: 'home-detail',
    templateUrl: 'app/home/details.component.html'
})
export class HomeCreateComponent implements OnInit {

    restaurant = new Restaurant();

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

    getRestaurant(): void {

    }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }
}