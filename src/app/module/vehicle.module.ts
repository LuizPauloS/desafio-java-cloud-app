import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { VehicleRouting } from '../route/vehicle.routing';
import { VehicleService } from '../service/imp/vehicle.service';
import { SaveComponent } from '../component/vehicle/save/save.component';
import { EditComponent } from '../component/vehicle/edit/edit.component';
import { ListComponent } from '../component/vehicle/list/list.component';
import { VehicleTypeService } from '../service/imp/vehicle-type.service';

@NgModule({
  declarations: [
    SaveComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    VehicleRouting,
    ReactiveFormsModule
  ],
  providers: [
    VehicleService,
    VehicleTypeService
  ]
})
export class VehicleModule { }
