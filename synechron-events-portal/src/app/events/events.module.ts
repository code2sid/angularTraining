import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { EventsListComponent } from "./events-lists/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { NewEventComponent } from './new-event/new-event.component';
import { FirstLetterCapitalPipe } from "../pipes/first-letter-capital.pipe";
import { EventsFilterPipe } from "../pipes/events-filter.pipe";
import { EventsService } from "../services/events.service";
import { AuthTokenInterceptor } from '../services/auth-token.interceptor';

import { eventsRoutes } from './events.route';
import { AuthService } from '../services/auth.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, eventsRoutes, ReactiveFormsModule],
    exports: [],
    declarations: [
        EventDetailsComponent, EventsListComponent,
        EventsFilterPipe, FirstLetterCapitalPipe,
        NewEventComponent

    ],
    providers: [
        EventsService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthTokenInterceptor,
            multi: true
        }
    ],
})
export class EventsModule { }
