import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InsurancemasterService } from './insurancemaster.service';


@Component({
  selector: 'app-insurancemaster',
  templateUrl: './insurancemaster.component.html',
  styleUrls: ['./insurancemaster.component.css']
})
export class InsurancemasterComponent implements OnInit{
  constructor(public router: Router,
    public InsurancemasterService : InsurancemasterService){}
    ngOnInit(): void {
      
    }

}
