import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JphPostsListComponent } from "./jph-posts-list/jph-posts-list.component";
import { JphUsersListComponent } from "./jph-users-list/jph-users-list.component";


const jphRouteConfig: Routes = [
    {
        path: 'posts',
        component: JphPostsListComponent
    },
    {
        path: 'users',
        component: JphUsersListComponent
    }
];

export const jphRoutes:ModuleWithProviders = RouterModule.forChild(
    jphRouteConfig
);

