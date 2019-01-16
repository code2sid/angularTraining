import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

//components
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/employee-details/employee-details.component";
import { EventsListComponent } from "./events/events-lists/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

//pipes
import { FirstLetterCapitalPipe } from "./pipes/first-letter-capital.pipe";
import { EventsFilterPipe } from "./pipes/events-filter.pipe";

@NgModule({
	imports: [BrowserModule, FormsModule],
	exports: [],
	declarations: [
		AppComponent,
		EmployeesListComponent,
		EmployeeDetailsComponent,
		EventsListComponent,
		EventDetailsComponent,
		FirstLetterCapitalPipe,
		EventsFilterPipe
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
