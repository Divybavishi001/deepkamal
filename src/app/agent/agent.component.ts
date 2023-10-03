import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  constructor(public router: Router,
    public AgentService : AgentService){}
  ngOnInit(): void {
    
  }

}
