import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenuService } from './main-menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class MainMenuComponent implements OnInit {

  constructor(public router: Router,
    public mainmenu : MainMenuService) { }

  ngOnInit(): void {
    // console.log(this.loginservie.dbconfing.UserName);
  }

}
