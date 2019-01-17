import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//components
import { AppComponent } from "./app.component";

//pipes

import { EmployeeModule } from "./employees/employee.module";
import { EventsModule } from "./events/events.module";
import { JphModule } from "./jph/jph.module";

@NgModule({
	imports: [BrowserModule, EmployeeModule, EventsModule, JphModule],
	exports: [],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
