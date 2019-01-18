import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'event-details',
    templateUrl: 'event-details.component.html'
})

export class EventDetailsComponent implements OnInit {
    constructor(private _service: EventsService,
        private _activatedRoute: ActivatedRoute) { }
    pageTitle: string = "Details of - ";
    // @Input('inputEventId') eventId: number;
    e: Event;

    ngOnInit() {
        let eventId: any = this._activatedRoute.snapshot.paramMap.get("id");
        this._service.getSingle(eventId, "http://localhost:9090/api/events").subscribe(
            result => this.e = result,
            error => console.error(error),
            () => console.log("get selcted event call completed")
        );
    }

    closeDetails() {
        this.e = new Event();
    }
}