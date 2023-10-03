import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruckmasterService } from './truckmaster.service';

@Component({
  selector: 'app-truckmaster',
  templateUrl: './truckmaster.component.html',
  styleUrls: ['./truckmaster.component.css']
})
export class TruckmasterComponent implements OnInit{
  constructor(public router : Router,
    public TruckmasterService : TruckmasterService){}
    ngOnInit(): void {
      
    }

}
