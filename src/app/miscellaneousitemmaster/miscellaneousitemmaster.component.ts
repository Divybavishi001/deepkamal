import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiscellaneousitemmasterService } from './miscellaneousitemmaster.service';

@Component({
  selector: 'app-miscellaneousitemmaster',
  templateUrl: './miscellaneousitemmaster.component.html',
  styleUrls: ['./miscellaneousitemmaster.component.css']
})
export class MiscellaneousitemmasterComponent implements OnInit {
  constructor(public router: Router,
    public MiscellaneousitemmasterService : MiscellaneousitemmasterService){}
    ngOnInit(): void {
      
    }

}
