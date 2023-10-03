import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CashreceiptService } from './cashreceipt.service';

@Component({
  selector: 'app-cashreceipt',
  templateUrl: './cashreceipt.component.html',
  styleUrls: ['./cashreceipt.component.css']
})
export class CashreceiptComponent implements OnInit{
  constructor(public router: Router,
    public cashreceiptservice: CashreceiptService){}

    public ngOnInit(): void {
      
    }

}
