import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
    providedIn: "root"
})
export class JphService {
    constructor(private http: HttpClient) { }

    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>("http://jsonplaceholder.typicode.com/posts");
    }

    getAllusers(): Observable<User[]> {
        return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users");
    }
}