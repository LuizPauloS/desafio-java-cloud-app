import { Observable } from 'rxjs';

export interface BaseService<T> {

  all(): Observable<T[]>;

  save(t: T): Observable<T>;

  update(t: T): Observable<T>;

  delete(t: T): Observable<any>;

  byId(id: number): Observable<T>;
}
