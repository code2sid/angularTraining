import { CommonHttpCrud } from "./common-http-crud";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CommonHttpCrudRepositiry<T> implements CommonHttpCrud<T>{
    getAll(url: string): Observable<T[]> {
        return this._service.get<T[]>(url);
    }
    getSingle(id: number, url: string): Observable<T> {
        return this._service.get<T>(`${url}/${id}`);
    }
    addNew(dataObject: T, url: string): Observable<T> {
        return this._service.post<T>(url, dataObject);
    }
    constructor(private _service: HttpClient) { }
}