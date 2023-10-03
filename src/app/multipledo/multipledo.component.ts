import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MultipledoService } from './multipledo.service';

@Component({
  selector: 'app-multipledo',
  templateUrl: './multipledo.component.html',
  styleUrls: ['./multipledo.component.css']
})
export class MultipledoComponent implements OnInit {
  constructor(public router : Router,
    public multipledoservice : MultipledoService ){}
    public ngOnInit(): void {
      
    }

}
