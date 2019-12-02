import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { VehicleType } from 'src/app/model/vehicle-type.model';
import { VehicleService } from 'src/app/service/imp/vehicle.service';
import { VehicleTypeService } from 'src/app/service/imp/vehicle-type.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html'
})
export class SaveComponent implements OnInit {

  types: VehicleType[];
  formVehicle: FormGroup;

  constructor(private route: Router,
              private toast: ToastrService,
              private service: VehicleService,
              private spinner: NgxSpinnerService,
              private typeService: VehicleTypeService) { }

  ngOnInit() {
    this.types = [];
    this.initForm();
    this.getAllTypes();
  }

  getAllTypes(): void {
    this.typeService.all().subscribe(response => {
      this.types = response;
    });
  }

  initForm(): void {
    this.formVehicle = new FormGroup({
      name: new FormControl('', [Validators.required]),
      plate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      vehicleType: new FormControl('', [Validators.required])
    });
  }

  save(): void {
    this.spinner.show();
    if (this.formVehicle.valid) {
      this.service.save(this.formVehicle.value).subscribe(response => {
        this.spinner.hide();
        this.toast.success('Vehicle successfully added');
        console.log(response);
        this.route.navigate(['/vehicle/list']);
      });
    } else {
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
      this.toast.warning('Data not filled in correctly. Check and try again!');
    }
  }
}
