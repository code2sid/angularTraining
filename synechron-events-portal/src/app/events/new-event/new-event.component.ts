import { Component, OnInit } from '@angular/core';
import { EventForm } from '../models/event-form';
import { EventsService } from '../../services/events.service';
import { url } from 'inspector';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'new-event',
    templateUrl: 'new-event.component.html',
    styles: [
		`
			input.ng-invalid {
				border-left: 3px solid red;
			}
			input.ng-valid {
				border-left: 3px solid green;
			}
		`,
	]
})

export class NewEventComponent implements OnInit {
    constructor(private _service: EventsService,
        private router: Router) { }
    // event: Event = new Event();
    event: EventForm = new EventForm();
    pageTitle = "Register New Event !!!";
    ngOnInit() { }
    onNewEventSubmit() {
        // this.event.logo = "images/noimage.png";
        this._service.addNew(this.event.eventForm.value, "http://localhost:9090/api/events")
            .subscribe
            (result => {
                console.log(result);
                this.router.navigate(['/events']);
                // window.URL = new url("/events");

            },
            error => console.log(error),
            () => console.log("call for add new event completed !!! "));
    }
}