import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaysleepService } from './paysleep.service';

@Component({
  selector: 'app-paysleep',
  templateUrl: './paysleep.component.html',
  styleUrls: ['./paysleep.component.css']
})
export class PaysleepComponent implements OnInit {
  constructor(public router: Router,
    public paysleepservice: PaysleepService ){}
    public ngOnInit(): void {
      
    }

}
