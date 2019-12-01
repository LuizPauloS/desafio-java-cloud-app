import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaveComponent } from '../component/vehicle-type/save/save.component';
import { ListComponent } from '../component/vehicle-type/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'save', pathMatch: 'full' },
  { path: 'save', component: SaveComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleTypeRouting { }
