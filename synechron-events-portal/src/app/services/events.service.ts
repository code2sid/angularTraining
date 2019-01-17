import { Injectable } from '@angular/core';
import { Event } from '../events/models/event';
import { CommonHttpCrudRepositiry } from '../shared/common-http-crud-repository';

@Injectable()
export class EventsService extends CommonHttpCrudRepositiry<Event> {
   
}