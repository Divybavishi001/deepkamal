import { Component,OnInit } from '@angular/core';
import { AccountcreationService } from './accountcreation.service';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-accountcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccountcreationComponent implements OnInit {
  constructor(public router: Router ,
    public accountcreationservice :AccountcreationService,
    public paginationservice: PaginationService){}
    public LstCreateAc : any = [];
    public searchText :any =[];

  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;

  public ngOnInit(): void {
    this.accountcreationservice.resetService();
    this.getLeadgerAccount();
    
  }
  public getLeadgerAccount() {
    debugger
    //this.loaderService.show();
    this.accountcreationservice.getLeadgerAccount(this.accountcreationservice.objledgeraccount.ACNO).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstCreateAc = data["Table"];
          this.updatePaginationData(this.LstCreateAc);
        }
        //this.loaderService.hide();
      });
  }
  private updatePaginationData(records: any[]): void {
    this.paginationservice.setData(records);
    this.paginationservice.goToPage(1);
    this.updateDisplayedRecords();
  }

  private updateDisplayedRecords(): void {
    this.paginationservice.getCurrentPage().subscribe(page => {
      const start = (page - 1) * 10;
      const end = start + 10;
      this.paginationservice.getData().subscribe(data => {
        this.itemsToDisplay = data.slice(start, end);
      });
    });
  }

  private filterRecords(records: any[]): any[] {
    return records.filter((item: any) =>
      Object.values(item).some(val =>
        val !== null && (val as any).toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  public search(): void {
    let records = !this.searchText ? this.LstCreateAc : this.filterRecords(this.LstCreateAc);
    this.updatePaginationData(records);
  }
  // save items
  public saveledgeraccount(){
    



    this.accountcreationservice.insertAccount(this.accountcreationservice.objledgeraccount).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstCreateAc = data["Table1"];
        }
        //this.loaderService.hide();
        this.accountcreationservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
    if (obj.ACNO != null){this.accountcreationservice.objledgeraccount.ACNO = obj.ACNO.toString()} ;
    if (obj.AgentEnqNo != null){this.accountcreationservice.objledgeraccount.AgentEnqNo = obj.AgentEnqNo.toString()} ;
    if (obj.FirstName != null){this.accountcreationservice.objledgeraccount.FirstName = obj.FirstName.toString()} ;
    if (obj.MiddleName != null){this.accountcreationservice.objledgeraccount.MiddleName = obj.MiddleName.toString()} ;
    if (obj.LastName != null){this.accountcreationservice.objledgeraccount.LastName = obj.LastName.toString()} ;
    if (obj.ACNAME != null){this.accountcreationservice.objledgeraccount.ACNAME = obj.ACNAME.toString()} ;
    if (obj.GRP != null){this.accountcreationservice.objledgeraccount.GRP = obj.GRP.toString()} ;
    if (obj.SGRP != null){this.accountcreationservice.objledgeraccount.SGRP = obj.SGRP.toString()} ;
    if (obj.SSGRP != null){this.accountcreationservice.objledgeraccount.SSGRP = obj.SSGRP.toString()} ;
    if (obj.SSSGRP != null){this.accountcreationservice.objledgeraccount.SSSGRP = obj.SSSGRP.toString()} ;
    if (obj.GRP_FOUR != null){this.accountcreationservice.objledgeraccount.GRP_FOUR = obj.GRP_FOUR.toString()} ;
    if (obj.SGRP_FOUR != null){this.accountcreationservice.objledgeraccount.SGRP_FOUR = obj.SGRP_FOUR.toString()} ;
    if (obj.SSGRP_FOUR != null){this.accountcreationservice.objledgeraccount.SSGRP_FOUR = obj.SSGRP_FOUR.toString()} ;
    if (obj.SSSGRP_FOUR != null){this.accountcreationservice.objledgeraccount.SSSGRP_FOUR = obj.SSSGRP_FOUR.toString()} ;
    if (obj.OPBAL != null){this.accountcreationservice.objledgeraccount.OPBAL = obj.OPBAL.toString()} ;
    

  }
  public newItem(){
    debugger;
    this.accountcreationservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  } 
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }

}
