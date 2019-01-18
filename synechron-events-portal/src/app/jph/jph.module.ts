import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { JphPostsListComponent } from './jph-posts-list/jph-posts-list.component';
import { JphUsersListComponent } from './jph-users-list/jph-users-list.component';

import { jphRoutes } from './jp.routes';
import { JphService } from './services/jph.service';
import { JphUserService } from './services/jph-users.service';


@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, jphRoutes],
    exports: [JphPostsListComponent, JphUsersListComponent],
    declarations: [
        JphPostsListComponent,
        JphUsersListComponent
    ],
    providers: [JphService, JphUserService],
})
export class JphModule { }
