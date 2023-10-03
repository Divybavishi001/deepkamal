import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginService } from '../login/login.service';
import { EnquiryAgentService } from './enquiry-agent.service';

@Component({
  selector: 'app-enquiry-agent',
  templateUrl: './enquiry-agent.component.html',
  styleUrls: ['./enquiry-agent.component.css']
  
  
})
export class EnquiryAgentComponent implements OnInit{
  // @ViewChild('resumeInput', {
  //   static: true
  // }) resumeInput;
  public pageColor: string = "white";
  public isNew: boolean = false;
  public frmDisabled = true;
  constructor(private router: Router,
    public enquiryAgentService: EnquiryAgentService) { }
   
  public  ngOnInit(): void {
    this.isNew = true;
  }
  
}
