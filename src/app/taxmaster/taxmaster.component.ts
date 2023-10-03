import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaxmasterService } from './taxmaster.service';

@Component({
  selector: 'app-taxmaster',
  templateUrl: './taxmaster.component.html',
  styleUrls: ['./taxmaster.component.css']
})
export class TaxmasterComponent implements OnInit{
  constructor(public router: Router,
    public TaxmasterService: TaxmasterService){}
ngOnInit(): void {
  
}

}
