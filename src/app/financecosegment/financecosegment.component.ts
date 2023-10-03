import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinancecosegmentService } from './financecosegment.service';

@Component({
  selector: 'app-financecosegment',
  templateUrl: './financecosegment.component.html',
  styleUrls: ['./financecosegment.component.css']
})
export class FinancecosegmentComponent implements OnInit {
  constructor(public router: Router,
    public FinancecosementService: FinancecosegmentService){}
    ngOnInit(): void {
      
    }

}
