import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SepHomeComponent } from "./sep-home/sep-home.component";


const homeRouteConfig: Routes = [
    {
        path: '',
        component: SepHomeComponent
    },
];

export const homeRoutes: ModuleWithProviders = RouterModule.forChild(
    homeRouteConfig
);

