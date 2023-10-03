import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CashbankcontraService } from './cashbankcontra.service';

@Component({
  selector: 'app-cashbankcontra',
  templateUrl: './cashbankcontra.component.html',
  styleUrls: ['./cashbankcontra.component.css']
})
export class CashbankcontraComponent implements OnInit{
  constructor(public router: Router,
    public cashbankcontraservice: CashbankcontraService){}
    public ngOnInit(): void {
      
    }

}
