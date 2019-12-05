import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Vehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/imp/vehicle.service';

@Component({
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  @Input() vehicle: Vehicle;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private service: VehicleService) {}

  ngOnInit() {
    this.getDetailsVehicleById();
  }

  getDetailsVehicleById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`Usuário de id: ${id}`);
    this.service.byId(id).subscribe(response => {
      this.vehicle = response;
      console.log(this.vehicle);
    });
  }

  back() {
    this.location.back();
  }
}
