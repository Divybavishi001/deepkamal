import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from './area.service';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  constructor(public router : Router,
    public AreaService :AreaService){}
  ngOnInit(): void {
    
  }

}
