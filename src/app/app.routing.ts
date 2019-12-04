import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'vehicle', pathMatch: 'full' },
  { path: 'vehicle', loadChildren: () => import('./module/vehicle.module').then(v => v.VehicleModule) },
  { path: 'vehicle-type', loadChildren: () => import('./module/vehicle-type.module').then(vt => vt.VehicleTypeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRouting { }
