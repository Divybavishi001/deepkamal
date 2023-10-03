import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocatiomService } from './locatiom.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponernt implements OnInit{
  constructor(public router: Router,
    public LocationService : LocatiomService){}
    ngOnInit(): void {
      
    }

}
