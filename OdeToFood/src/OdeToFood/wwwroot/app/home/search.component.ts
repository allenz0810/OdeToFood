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
    selector: 'home-search',
    templateUrl: 'app/home/search.component.html'
})
export class HomeSearchComponent implements OnInit {

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit(): void {

    }

    goBack(): void {
        this.location.back();
    }
}