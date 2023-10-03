import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailinvoiceService } from './retailinvoice.service';

@Component({
  selector: 'app-retailinvoice',
  templateUrl: './retailinvoice.component.html',
  styleUrls: ['./retailinvoice.component.css']
})
export class RetailinvoiceComponent implements OnInit{
  constructor(public router: Router,
    public retailinvoice :RetailinvoiceService){}
    public ngOnInit(): void {
      
    }
}
