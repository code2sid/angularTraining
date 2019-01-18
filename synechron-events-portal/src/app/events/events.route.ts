import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsListComponent } from "./events-lists/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { NewEventComponent } from "./new-event/new-event.component";
import { AuthService } from "../services/auth.service";


const eventsRouteConfig: Routes = [
    {
        path: '',
        component: EventsListComponent,
        canActivate:[AuthService]
    },
    {
        path: 'new',
        component: NewEventComponent,
        canActivate:[AuthService]
    },
    {
        path: ':id',
        component: EventDetailsComponent,
        canActivate:[AuthService]
    }
];

export const eventsRoutes: ModuleWithProviders = RouterModule.forChild(
    eventsRouteConfig
);

