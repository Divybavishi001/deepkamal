import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchmasterService } from './branchmaster.service';

@Component({
  selector: 'app-branchmaster',
  templateUrl: './branchmaster.component.html',
  styleUrls: ['./branchmaster.component.css']
})
export class BranchmasterComponent implements OnInit {
  constructor(public router :Router,
    public BranchmasterService :BranchmasterService){}
    ngOnInit(): void {
      
    }

}
