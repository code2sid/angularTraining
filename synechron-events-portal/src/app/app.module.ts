import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//Components
import { AppComponent } from "./app.component";

//Modules
import { NavigationModule } from "./navigation/navigation.module";
import { appRoutes } from "./app.route";
import { SecurityModule } from "./security/security.module";

@NgModule({
	imports: [
		BrowserModule,
		NavigationModule,
		appRoutes,
		SecurityModule
	],
	exports: [],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
