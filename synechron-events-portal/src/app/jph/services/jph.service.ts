import { Injectable } from '@angular/core';


import { Post } from '../models/post';
import { CommonHttpCrudRepositiry } from '../../shared/common-http-crud-repository';

@Injectable()
export class JphService extends CommonHttpCrudRepositiry<Post> {
}