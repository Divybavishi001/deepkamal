import { Component, OnInit } from '@angular/core';
import { ColorService } from './color.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  constructor(public router: Router,
    public ColorService: ColorService){}
  ngOnInit(): void {
    
  }

}
