import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRouting } from '../route/vehicle.routing';
import { VehicleService } from '../service/imp/vehicle.service';
import { SaveComponent } from '../component/vehicle/save/save.component';
import { EditComponent } from '../component/vehicle/edit/edit.component';
import { ListComponent } from '../component/vehicle/list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SaveComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    VehicleRouting
  ],
  providers: [
    VehicleService
  ]
})
export class VehicleModule { }
