import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiscellaneoussalesService } from './miscellaneoussales.service';

@Component({
  selector: 'app-miscellaneoussales',
  templateUrl: './miscellaneoussales.component.html',
  styleUrls: ['./miscellaneoussales.component.css']
})
export class MiscellaneoussalesComponent implements OnInit{
  constructor(public router : Router,
    public miscellaneousservice : MiscellaneoussalesService){}
  
  public ngOnInit(): void {
    
  }

}
