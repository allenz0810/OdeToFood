import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Restaurant } from './restaurant';
import { KeyValuePair } from './keyvaluepair';
import { HomeService } from './home.service';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'home-map',
    templateUrl: 'app/home/map.component.html',
    styleUrls: ['app/home/map.component.css']
})
export class MapDetailsComponent implements OnInit {
    id = 0;
    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit(): void {

    }

    setRestaurant = (data): void => {
    }

    goBack(): void {
        this.location.back();
    }
}