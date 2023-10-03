import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleaccessoryService } from './vehicleaccessory.service';

@Component({
  selector: 'app-vehicleaccessory',
  templateUrl: './vehicleaccessory.component.html',
  styleUrls: ['./vehicleaccessory.component.css']
})
export class VehicleaccessoryComponent implements OnInit {
  constructor(public router:Router,
    public vehicleaccessory : VehicleaccessoryService){}
    public ngOnInit(): void {
      
    }

}
