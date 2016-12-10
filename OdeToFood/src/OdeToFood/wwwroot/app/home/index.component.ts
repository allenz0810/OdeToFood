import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';
import { HomeService } from './home.service';
import { CuisineEnum } from './Cuisine';

@Component({
    selector: 'home-index',
    templateUrl: 'app/home/index.component.html'
})
export class HomeIndexComponent implements OnInit {


    restaurants: Restaurant[];
    CuisineEnum: typeof CuisineEnum = CuisineEnum;

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.getAll();
    }

    getAll = (): void => {
        this.homeService.getAll().then(
            data => this.setRestaurants(data)
        );
    }

    setRestaurants = (data): void => {
        this.restaurants = data.restaurants;
    }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }
}