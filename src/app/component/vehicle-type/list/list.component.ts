import { Component, OnInit } from '@angular/core';

import { VehicleType } from 'src/app/model/vehicle-type.model';
import { VehicleTypeService } from 'src/app/service/imp/vehicle-type.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  vehicleTypes: VehicleType[];

  constructor(private spinner: NgxSpinnerService,
              private service: VehicleTypeService) {}

  ngOnInit() {
    this.spinner.show();
    this.vehicleTypes = [];
    this.getAllVehicleTypes();
  }

  getAllVehicleTypes() {
    this.service.all().subscribe(response => {
      this.vehicleTypes = response;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    });
  }

}
