import { Component, OnInit, Injectable } from '@angular/core';

import { Event } from '../models/event';
import { EventsService } from '../../services/events.service';


@Component({
    selector: 'events-list',
    templateUrl: 'events-list.component.html'
})

export class EventsListComponent implements OnInit {
    constructor(private _eventService: EventsService) { }

    ngOnInit() {
        this._eventService.getAll("http://localhost:9090/api/events")
            .subscribe(
                result => this.events = result,
                error => console.log(error),
                () => console.log("get all service call is completed !!!")
            );
    }

    pageTitle: string = "Synechron Events List !!!";
    subTitle: string = "Events managed by Synechron HR, Pune !!!";
    events: Event[] = [];
    // selectedEvent: Event;
    // showDetails(event: Event): void {
    //     this.selectedEvent = event;
    // }
}