import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base.service';
import { Vehicle } from '../../model/vehicle.model';
import { httpOptions } from 'src/app/config/config-app';
import { environment } from 'src/environments/environment';

@Injectable()
export class VehicleService implements BaseService<Vehicle> {

  constructor(private http: HttpClient) { }

  all(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(environment.vehicle.all, httpOptions);
  }

  save(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(environment.vehicle.save, vehicle, httpOptions);
  }

  byId(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${environment.vehicle.byId}?id=${id}`, httpOptions);
  }

  update(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${environment.vehicle.edit}`, vehicle, httpOptions);
  }

  delete(vehicle: Vehicle): Observable<any> {
    return this.http.delete<any>(`${environment.vehicle.delete}`, httpOptions);
  }
}
