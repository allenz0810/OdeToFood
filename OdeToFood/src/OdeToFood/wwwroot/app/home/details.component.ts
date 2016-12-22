import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';
import { HomeService } from './home.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'home-detail',
    templateUrl: 'app/home/details.component.html'
})
export class HomeDetailsComponent implements OnInit {

    restaurant = Restaurant;

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
        this.route.params
            .switchMap((params: Params) => this.homeService.getRestaurant(+params['id'])
            .then(data => this.setRestaurant(data)));
    }

    setRestaurant = (data): void => {
        this.restaurant = data.restaurant;
    }

    goBack(): void {
        this.location.back();
    }
}