import { Injectable } from '@angular/core';


import { User } from '../models/user';
import { CommonHttpCrudRepositiry } from '../../shared/common-http-crud-repository';

@Injectable({
    providedIn: "root"
})
export class JphService extends CommonHttpCrudRepositiry<User> {
}