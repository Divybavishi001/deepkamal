import { Component,OnInit } from '@angular/core';
import { AccountcreationService } from './accountcreation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccountcreationComponent implements OnInit {
  constructor(public router: Router ,
    public accountcreationservice :AccountcreationService){}
    public LstCreateAc : any = [];

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
          this.lstDummyQuoteListing = this.LstCreateAc;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstCreateAc.length / this.perPage);
        }
        //this.loaderService.hide();
      });
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

    this.accountcreationservice.objledgeraccount.ACNO = obj.ACNO.toString();
    this.accountcreationservice.objledgeraccount.AgentEnqNo = obj.AgentEnqNo.toString();
    this.accountcreationservice.objledgeraccount.FirstName = obj.FirstName.toString();
    this.accountcreationservice.objledgeraccount.MiddleName = obj.MiddleName.toString();
    this.accountcreationservice.objledgeraccount.LastName = obj.LastName.toString();
    this.accountcreationservice.objledgeraccount.ACNAME = obj.ACNAME.toString();
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
  //new button
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
