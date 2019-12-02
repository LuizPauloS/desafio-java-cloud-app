import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { SharedModule } from '../shared/shared.module';
import { VehicleRouting } from '../route/vehicle.routing';
import { VehicleService } from '../service/imp/vehicle.service';
import { SaveComponent } from '../component/vehicle/save/save.component';
import { EditComponent } from '../component/vehicle/edit/edit.component';
import { ListComponent } from '../component/vehicle/list/list.component';
import { VehicleTypeService } from '../service/imp/vehicle-type.service';
import { SpinnerComponent } from '../component/spinner/spinner.component';

@NgModule({
  declarations: [
    SaveComponent,
    EditComponent,
    ListComponent,
    SpinnerComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    VehicleRouting,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
    VehicleService,
    VehicleTypeService
  ]
})
export class VehicleModule { }
