import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';
import { HomeService } from './home.service';

import 'rxjs/add/operator/switchMap';
import { CuisineEnum } from './Cuisine';

@Component({
    selector: 'home-detail',
    templateUrl: 'app/home/details.component.html',
    styleUrls: ['app/home/details.component.css']
})
export class HomeDetailsComponent implements OnInit {
    restaurant = new Restaurant();
    id = 0;
    lat: number = 51.678418;
    lng: number = 7.809007;

    CuisineEnum: typeof CuisineEnum = CuisineEnum;

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit(): void {
         
         this.route.params.subscribe(
            (param: any) => {
                this.id = param['id'];
            });

        this.homeService.getRestaurant(this.id).then(
            data => this.setRestaurant(data)
        );
    }

    setRestaurant = (data): void => {
        this.restaurant = data;
    }

    goBack(): void {
        this.location.back();
    }
}