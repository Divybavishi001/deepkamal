import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultiplevehicletaxService } from './multiplevehicletax.service';

@Component({
  selector: 'app-multiplevehicletax',
  templateUrl: './multiplevehicletax.component.html',
  styleUrls: ['./multiplevehicletax.component.css']
})
export class MultiplevehicletaxComponent implements OnInit{
  constructor(public router: Router,
    public MultipleVehicleTax : MultiplevehicletaxService){}
  public ngOnInit(): void {
    
  }


}
