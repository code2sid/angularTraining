import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SepLoginComponent } from "./security/login/sep-login.component";

const defaultRouteConfig: Routes = [
	{
		path: '',
		loadChildren: './home/home.module#HomeModule'
	}
];

const homeRouteConfig: Routes = [
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	}
];

const employeesRouteConfig: Routes = [
	{
		path: 'employees',
		loadChildren: './employees/employee.module#EmployeeModule'
	}
];
const eventsRouteConfig: Routes = [
	{
		path: 'events',
		loadChildren: './events/events.module#EventsModule'
	}
];

const jphRouteConfig: Routes = [
	{
		path: 'jph',
		loadChildren: './jph/jph.module#JphModule'
	}
];


const loginRouteConfig: Routes = [
	{
		path: 'login',
		component: SepLoginComponent
	}
];

const appRoutesConfig: Routes = [
	...homeRouteConfig,
	...employeesRouteConfig,
	...eventsRouteConfig,
	...jphRouteConfig,
	...defaultRouteConfig,
	...loginRouteConfig
];


export const appRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutesConfig);
