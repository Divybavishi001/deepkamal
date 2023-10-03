import { Component, OnInit } from '@angular/core';
import { LoginService } from './Login/login.service';
import { Router } from '@angular/router';
import { publishFacade } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myproject';
  username = "";
  constructor(public loginservice: LoginService,
    public router : Router
     ){
    
  }
  public ngOnInit(): void {
    
    
  }
  // showdiv = false;
 // data = 'divy';
  // myimage:string = "assets/images/bglogin.jpg";
}
