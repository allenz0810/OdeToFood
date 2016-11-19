import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'home-index',
    templateUrl: 'index.component.html'
})
export class HomeIndexComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }
}
