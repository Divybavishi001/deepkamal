import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdsmasterService } from './tdsmaster.service';

@Component({
  selector: 'app-tdsmaster',
  templateUrl: './tdsmaster.component.html',
  styleUrls: ['./tdsmaster.component.css']
})
export class TdsmasterComponent implements OnInit {
  constructor(public router: Router,
    public TdsmasterService : TdsmasterService){}
    ngOnInit(): void {
      
    }

}
