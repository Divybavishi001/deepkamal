import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CashreceiptService } from './cashreceipt.service';

@Component({
  selector: 'app-cashreceipt',
  templateUrl: './cashreceipt.component.html',
  styleUrls: ['./cashreceipt.component.css']
})
export class CashreceiptComponent implements OnInit{
  constructor(public router:Router,
    public cashreceiptservice :CashreceiptService){}
  public LstCashReceipt  : any=[];
  
  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;

  public ngOnInit(): void {
    this.cashreceiptservice.resetService();
    this.GETAfterSalesDetails();
    
  }
  public GETAfterSalesDetails() {
    debugger
    //this.loaderService.show();
    this.cashreceiptservice.GETTransaction(this.cashreceiptservice.objCashReceipt.DOCNO).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstCashReceipt = data["Table"];
          this.lstDummyQuoteListing = this.LstCashReceipt;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstCashReceipt.length / this.perPage);
        }
        //this.loaderService.hide();
      });
  }
  // save items
  public saveledgeraccount(){
    



    this.cashreceiptservice.insertTransaction(this.cashreceiptservice.objCashReceipt).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstCashReceipt = data["Table1"];
        }
        //this.loaderService.hide();
        this.cashreceiptservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.cashreceiptservice.objCashReceipt.FirstName = obj.FirstName.toString();
    this.cashreceiptservice.objCashReceipt.AgentEnqNo = obj.AgentEnqNo.toString();
    this.cashreceiptservice.objCashReceipt.ACNO = obj.ACNO.toString();
    this.cashreceiptservice.objCashReceipt.MiddleName = obj.MiddleName.toString();
    this.cashreceiptservice.objCashReceipt.LastName = obj.LastName.toString();
    this.cashreceiptservice.objCashReceipt.ACNAME = obj.ACNAME.toString();
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
    this.cashreceiptservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
