import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesmanService } from './salesman.service';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {
  constructor(public router: Router,
    public SalesmanService : SalesmanService){}
    ngOnInit(): void {
      
    }

}
