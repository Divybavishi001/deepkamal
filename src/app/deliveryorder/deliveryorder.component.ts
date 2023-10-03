import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryorderService } from './deliveryorder.service';
import { LoginService } from '../Login/login.service';
@Component({
  selector: 'app-deliveryorder',
  templateUrl: './deliveryorder.component.html',
  styleUrls: ['./deliveryorder.component.css']
})
export class DeliveryorderComponent implements OnInit{
  constructor(public router: Router,
    public deliveryservice : DeliveryorderService) { }

  public ngOnInit(): void {
    
  }

}
