import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportmstService } from './transportmst.service';

@Component({
  selector: 'app-transportmst',
  templateUrl: './transportmst.component.html',
  styleUrls: ['./transportmst.component.css']
})
export class TransportmstComponent implements OnInit{
  constructor(public router: Router,
    public TransportmstService : TransportmstService){}
    ngOnInit(): void {
      
    }

}
