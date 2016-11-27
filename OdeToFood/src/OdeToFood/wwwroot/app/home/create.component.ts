import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from './restaurant'

@Component({
    selector: 'home-create',
    templateUrl: 'app/home/create.component.html'
})
export class HomeCreateComponent implements OnInit {
    restaurant: Restaurant;
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