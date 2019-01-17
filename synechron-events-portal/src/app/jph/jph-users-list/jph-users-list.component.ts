import { Component, OnInit } from '@angular/core';
import { JphService } from '../services/jph.service';
import { User } from '../models/user';

@Component({
    selector: 'jph-users',
    templateUrl: 'jph-users-list.component.html'
})

export class JphUsersListComponent implements OnInit {
    constructor(private _service: JphService) { }
    users: User[] = [];
    pageTitle:string = "Jph Users list !!!";
    ngOnInit() {
        this._service.getAll("http://jsonplaceholder.typicode.com/users")
            .subscribe(
                result => this.users = result,
                error => console.log(error),
                () => console.log("service call completed")
            );

    }
}