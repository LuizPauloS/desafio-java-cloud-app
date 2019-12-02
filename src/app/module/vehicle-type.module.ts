import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { VehicleTypeRouting } from '../route/vehicle-type.routing';
import { VehicleTypeService } from '../service/imp/vehicle-type.service';
import { SaveComponent } from '../component/vehicle-type/save/save.component';
import { ListComponent } from '../component/vehicle-type/list/list.component';
import { EditComponent } from '../component/vehicle-type/edit/edit.component';

@NgModule({
  declarations: [
    SaveComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    VehicleTypeRouting,
    ReactiveFormsModule
  ],
  providers: [
    VehicleTypeService
  ]
})
export class VehicleTypeModule { }
