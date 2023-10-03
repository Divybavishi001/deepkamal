import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchememasterService } from './schememaster.service';

@Component({
  selector: 'app-schememaster',
  templateUrl: './schememaster.component.html',
  styleUrls: ['./schememaster.component.css']
})
export class SchememasterComponent implements OnInit{
  constructor(public router : Router,
    public SchememasterService : SchememasterService){}
    ngOnInit(): void {
      
    }

}
