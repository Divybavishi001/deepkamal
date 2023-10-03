import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseregisterService } from './expenseregister.service';

@Component({
  selector: 'app-expenseregister',
  templateUrl: './expenseregister.component.html',
  styleUrls: ['./expenseregister.component.css']
})
export class ExpenseregisterComponent implements OnInit {
  constructor(public router:Router,
    public expenseregisterservice :ExpenseregisterService){}
    public ngOnInit(): void {
      
    }

}
