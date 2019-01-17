import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventsListComponent } from "./events-lists/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { FirstLetterCapitalPipe } from "../pipes/first-letter-capital.pipe";
import { EventsFilterPipe } from "../pipes/events-filter.pipe";
import { EventsService } from "../services/events.service";

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule],
    exports: [EventsListComponent],
    declarations: [
        EventDetailsComponent, EventsListComponent,
        EventsFilterPipe, FirstLetterCapitalPipe

    ],
    providers: [EventsService],
})
export class EventsModule { }
