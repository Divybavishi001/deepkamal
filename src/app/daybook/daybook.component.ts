import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DaybookService } from './daybook.service';

@Component({
  selector: 'app-daybook',
  templateUrl: './daybook.component.html',
  styleUrls: ['./daybook.component.css']
})
export class DaybookComponent implements OnInit {
  constructor(public router: Router,
    public DayBookService: DaybookService){}
    ngOnInit(): void {
      
    }

}
