import { Component, OnInit } from '@angular/core';

/**
 * First lazy Loaded Component
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
})
export class IndexComponent implements OnInit {



    constructor() { }

    //done creating the component.
    ngOnInit() {

    }


}
