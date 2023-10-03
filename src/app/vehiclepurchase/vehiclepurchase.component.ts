import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiclepurchaseService } from './vehiclepurchase.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { LoaderService } from '../loader/loader.service';
@Component({
  selector: 'app-vehiclepurchase',
  templateUrl: './vehiclepurchase.component.html',
  styleUrls: ['./vehiclepurchase.component.css']
})
export class VehiclepurchaseComponent implements OnInit  {
  constructor(public router :Router,
    public vehiclepurchaseservice : VehiclepurchaseService){}
  public  ngOnInit(): void {
  }
}
