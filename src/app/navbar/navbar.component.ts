import { Component, OnDestroy } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  showNavbar: boolean = true;
  subcription: Subscription;
  constructor(private navbarService: NavbarService,
    public router :Router){
    this.subcription = this.navbarService.showNavbar.subscribe((value)=>{
      this.showNavbar = value;
    });
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

}
