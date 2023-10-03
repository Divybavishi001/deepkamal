import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MonthlysalesService } from './monthlysales.service';

@Component({
  selector: 'app-monthlysales',
  templateUrl: './monthlysales.component.html',
  styleUrls: ['./monthlysales.component.css']
})
export class MonthlysalesComponent implements OnInit {
  constructor(public router: Router,
    public monthlysales : MonthlysalesService){}
    public ngOnInit(): void {
      
    }

}
