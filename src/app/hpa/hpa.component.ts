import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HpaService } from './hpa.service';

@Component({
  selector: 'app-hpa',
  templateUrl: './hpa.component.html',
  styleUrls: ['./hpa.component.css']
})
export class HpaComponent implements OnInit {
  constructor(public router: Router,
    public HpaService: HpaService){}
    ngOnInit(): void {
      
    }

}
