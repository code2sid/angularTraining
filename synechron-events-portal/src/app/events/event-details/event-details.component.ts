import { Component, Input, OnChanges } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../../services/events.service';

@Component({
    selector: 'event-details',
    templateUrl: 'event-details.component.html'
})

export class EventDetailsComponent implements OnChanges {
    constructor(private _service: EventsService) { }
    pageTitle: string = "Details of - ";
    @Input('inputEventId') eventId: number;
    e: Event;

    ngOnChanges() {
        this.e = this._service.getEvent(this.eventId);
    }
}