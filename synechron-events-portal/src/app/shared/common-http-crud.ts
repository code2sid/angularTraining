import { Observable } from "rxjs";

export interface CommonHttpCrud<T> {
    getAll(url: string): Observable<T[]>;
    getSingle(id: number, url: string): Observable<T>;
    addNew(datObject: T, url: string): Observable<T>;
}