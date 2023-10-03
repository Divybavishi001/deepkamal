import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LedgeraccountService } from './ledgeraccount.service';

@Component({
  selector: 'app-ledgeraccount',
  templateUrl: './ledgeraccount.component.html',
  styleUrls: ['./ledgeraccount.component.css']
})
export class LedgeraccountComponent implements OnInit{
  constructor(public router :Router,
  public ledgeraccountservice :LedgeraccountService){}
  public LstLedgerAccount : any = [];

  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;

  public ngOnInit(): void {
    this.ledgeraccountservice.resetService();
    this.getLeadgerAccount();
    
  }
  public getLeadgerAccount() {
    debugger
    //this.loaderService.show();
    this.ledgeraccountservice.getLeadgerAccount(this.ledgeraccountservice.objledgeraccount.ACNO).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstLedgerAccount = data["Table"];
          this.lstDummyQuoteListing = this.LstLedgerAccount;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstLedgerAccount.length / this.perPage);
        }
        //this.loaderService.hide();
      });
  }
  // save items
  public saveledgeraccount(){
    



    this.ledgeraccountservice.insertAccount(this.ledgeraccountservice.objledgeraccount).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstLedgerAccount = data["Table1"];
        }
        //this.loaderService.hide();
        this.ledgeraccountservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.ledgeraccountservice.objledgeraccount.ACNO = obj.ACNO.toString();
    this.ledgeraccountservice.objledgeraccount.AgentEnqNo = obj.AgentEnqNo.toString();
    this.ledgeraccountservice.objledgeraccount.FirstName = obj.FirstName.toString();
    this.ledgeraccountservice.objledgeraccount.MiddleName = obj.MiddleName.toString();
    this.ledgeraccountservice.objledgeraccount.LastName = obj.LastName.toString();
    this.ledgeraccountservice.objledgeraccount.ACNAME = obj.ACNAME.toString();
  }
  // for paginate
  public onGoTo(page: number): void {
    this.current = page
    this.itemsToDisplay = this.paginate(this.current, this.perPage)
  }
  
  public onNext(page: number): void {
    this.current = page + 1
    this.itemsToDisplay = this.paginate(this.current, this.perPage)
  }
  
  public onPrevious(page: number): void {
    this.current = page - 1
    this.itemsToDisplay = this.paginate(this.current, this.perPage)
  }
  public paginate(current: number, perPage: number): any {
    return [...this.lstDummyQuoteListing.slice((current - 1) * perPage).slice(0, perPage)]
  } 
}
