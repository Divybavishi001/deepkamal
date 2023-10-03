import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestmenuService } from './testmenu.service';

@Component({
  selector: 'app-testmenu',
  templateUrl: './testmenu.component.html',
  styleUrls: ['./testmenu.component.css']
})
export class TestmenuComponent implements OnInit {
  constructor(public router:Router,
    public testmenuservice: TestmenuService){}
    public ngOnInit(): void {
      
    }

}
