import { NgModule } from '@angular/core';
import { JphPostsListComponent } from './jph-posts-list/jph-posts-list.component';
import { JphUsersListComponent } from './jph-users-list/jph-users-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    exports: [JphPostsListComponent, JphUsersListComponent],
    declarations: [
        JphPostsListComponent,
        JphUsersListComponent
    ],
    providers: [],
})
export class JphModule { }
