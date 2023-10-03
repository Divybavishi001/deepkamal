import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiscellaneouspurchaseService } from './miscellaneouspurchase.service';

@Component({
  selector: 'app-miscellaneouspurchase',
  templateUrl: './miscellaneouspurchase.component.html',
  styleUrls: ['./miscellaneouspurchase.component.css']
})
export class MiscellaneouspurchaseComponent implements OnInit{
  constructor(public router : Router,
    public miscellaneousservice : MiscellaneouspurchaseService){}
  
  public ngOnInit(): void {
    
  }

}
