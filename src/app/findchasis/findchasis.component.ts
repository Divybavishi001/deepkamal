import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindchasisService } from './findchasis.service';

@Component({
  selector: 'app-findchasis',
  templateUrl: './findchasis.component.html',
  styleUrls: ['./findchasis.component.css']
})
export class FindchasisComponent implements OnInit{
  constructor(public router: Router,
    public findchasisservice: FindchasisService){}
 public ngOnInit(): void {
   
 }
}
