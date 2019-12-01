import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base.service';
import { VehicleType } from 'src/app/model/vehicle-type.model';
import { environment } from 'src/environments/environment';
import { httpOptions } from 'src/app/config/config-app';

@Injectable()
export class VehicleTypeService implements BaseService<VehicleType> {

  constructor(private http: HttpClient) {}

  all(): Observable<VehicleType[]> {
    return this.http.get<VehicleType[]>(environment.vehicle_type.all, httpOptions);
  }

  save(vehicleType: VehicleType): Observable<VehicleType> {
    return this.http.post<VehicleType>(environment.vehicle_type.save, vehicleType, httpOptions);
  }

  update(vehicleType: VehicleType): Observable<VehicleType> {
    return this.http.put<VehicleType>(environment.vehicle_type.edit, vehicleType, httpOptions);
  }

  delete(vehicleType: VehicleType): Observable<any> {
    return this.http.delete<any>(environment.vehicle_type.delete, httpOptions);
  }

  byId(id: number): Observable<VehicleType> {
    return this.http.get<VehicleType>(`${environment.vehicle_type.byId}/${id}}`, httpOptions);
  }
}
