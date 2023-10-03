import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportexpService } from './transportexp.service';

@Component({
  selector: 'app-transportexp',
  templateUrl: './transportexp.component.html',
  styleUrls: ['./transportexp.component.css']
})
export class TransportexpComponent implements OnInit {
  constructor(public router: Router,
    public transportexpservice : TransportexpService){}

    public ngOnInit(): void {
      
    }

}
