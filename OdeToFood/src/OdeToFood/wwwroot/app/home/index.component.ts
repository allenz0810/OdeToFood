﻿import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';
import { HomeService } from './home.service';

@Component({
    selector: 'home-index',
    templateUrl: 'app/home/index.component.html'
})
export class HomeIndexComponent implements OnInit {


    restaurants: Restaurant[];

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private location: Location
    ) {

    }

    getAll(): void {
        this.homeService.getAll().then(data => (this.restaurants = data));
    }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }
}