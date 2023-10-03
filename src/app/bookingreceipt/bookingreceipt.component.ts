import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingreceiptService } from './bookingreceipt.service';

@Component({
  selector: 'app-bookingreceipt',
  templateUrl: './bookingreceipt.component.html',
  styleUrls: ['./bookingreceipt.component.css']
})
export class BookingreceiptComponent implements OnInit{
  constructor(public router: Router,
    public bookingreceiptservice: BookingreceiptService){}
  public ngOnInit(): void {
    
  }

}
