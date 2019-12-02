import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { Vehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/imp/vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private service: VehicleService,
              private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    this.vehicles = [];
    this.getAllVehicles();
  }

  getAllVehicles(): void {
    this.service.all().subscribe(response => {
      this.vehicles = response;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    });
  }

}
