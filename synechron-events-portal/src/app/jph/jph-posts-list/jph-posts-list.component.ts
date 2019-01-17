import { Component, OnInit } from '@angular/core';
import { JphService } from '../services/jph.service';
import { Post } from '../models/post';

@Component({
    selector: 'jph-posts',
    templateUrl: 'jph-posts-list.component.html'
})

export class JphPostsListComponent implements OnInit {
    constructor(private _service: JphService) { }
    pageTitle: string = "Jph placeholder's Post Data !";
    posts: Post[] = [];
    ngOnInit() {
        this._service.getAll("http://jsonplaceholder.typicode.com/posts")
            .subscribe(
                result => this.posts = result,
                error => console.log(error),
                () => console.log("service call completed")
            );


    }
}