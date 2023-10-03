import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankmasterService } from './bankmaster.service';
@Component({
  selector: 'app-bankmaster',
  templateUrl: './bankmaster.component.html',
  styleUrls: ['./bankmaster.component.css']
})
export class BankmasterComponent implements OnInit {
  constructor(public router: Router,
    public BankmasterService: BankmasterService){}
    ngOnInit(): void {
      
    }
}
