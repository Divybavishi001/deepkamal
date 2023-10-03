import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleaftersalesService } from './vehicleaftersales.service';

@Component({
  selector: 'app-vehicleaftersales',
  templateUrl: './vehicleaftersales.component.html',
  styleUrls: ['./vehicleaftersales.component.css']
})
export class VehicleaftersalesComponent implements OnInit{
  constructor(public router: Router,
    public vehicleaftersales : VehicleaftersalesService){}
 public ngOnInit(): void {

   
 }
}
