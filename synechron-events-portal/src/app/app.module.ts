import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/employee-details/employee-details.component";

@NgModule({
	imports: [BrowserModule],
	exports: [],
	declarations: [
		AppComponent,
		EmployeesListComponent,
		EmployeeDetailsComponent
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
