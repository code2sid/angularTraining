import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
//components
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/employee-details/employee-details.component";
import { EventsListComponent } from "./events/events-lists/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { JphPostsListComponent } from "./jph/jph-posts-list/jph-posts-list.component";

//pipes
import { FirstLetterCapitalPipe } from "./pipes/first-letter-capital.pipe";
import { EventsFilterPipe } from "./pipes/events-filter.pipe";
import { EventsService } from "./services/events.service";
import { JphUsersListComponent } from "./jph/jph-users-list/jph-users-list.component";

@NgModule({
	imports: [BrowserModule, FormsModule, HttpClientModule],
	exports: [],
	declarations: [
		AppComponent,
		EmployeesListComponent,
		EmployeeDetailsComponent,
		EventsListComponent,
		EventDetailsComponent,
		JphPostsListComponent,
		JphUsersListComponent,

		FirstLetterCapitalPipe,
		EventsFilterPipe
	],
	providers: [EventsService],
	bootstrap: [AppComponent],
})
export class AppModule { }
