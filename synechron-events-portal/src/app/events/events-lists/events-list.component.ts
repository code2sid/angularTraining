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
        this.events = this._eventService.getAllEvents();
    }
    
    pageTitle: string = "Synechron Events List !!!";
    subTitle: string = "Events managed by Synechron HR, Pune !!!";
    events: Event[] = [];
    selectedEvent: Event;
    showDetails(event: Event): void {
        this.selectedEvent = event;
    }
}