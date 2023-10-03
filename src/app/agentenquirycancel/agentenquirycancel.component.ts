import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentenquirycancelService } from './agentenquirycancel.service';

@Component({
  selector: 'app-agentenquirycancel',
  templateUrl: './agentenquirycancel.component.html',
  styleUrls: ['./agentenquirycancel.component.css']
})
export class AgentenquirycancelComponent implements OnInit{
  constructor(public router : Router,
    public agentenquirycancelservice : AgentenquirycancelService){}
   public ngOnInit(): void {
      
    }

}
