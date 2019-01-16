import { Component, Input } from '@angular/core';
import { Event } from '../models/event';

@Component({
    selector: 'event-details',
    templateUrl: 'event-details.component.html'
})

export class EventDetailsComponent {
    constructor() { }
    pageTitle: string = "Details of - ";
    @Input('inputEvent') e: Event;
}