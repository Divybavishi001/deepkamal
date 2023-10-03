import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RtopassingcodeService } from './rtopassingcode.service';

@Component({
  selector: 'app-rtopassingcode',
  templateUrl: './rtopassingcode.component.html',
  styleUrls: ['./rtopassingcode.component.css']
})
export class RtopassingcodeComponent implements OnInit{
  constructor(public router: Router,
    public RtopassingcodeService : RtopassingcodeService){}
    ngOnInit(): void {
      
    }

}
