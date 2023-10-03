import { Component,OnInit } from '@angular/core';
import { RetailinvoiceService } from './retailinvoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailinvoice',
  templateUrl: './retailinvoice.component.html',
  styleUrls: ['./retailinvoice.component.css']
})
export class RetailinvoiceComponent implements OnInit{
  constructor(public router:Router,
    public retailinvoiceservice : RetailinvoiceService){}
  public LstRetialInvoice  : any=[];
  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;

  public ngOnInit(): void {
    this.retailinvoiceservice.resetService();
    this.getInvoice();
    
  }
  public getInvoice() {
    debugger
    //this.loaderService.show();
    this.retailinvoiceservice.getInvoice(this.retailinvoiceservice.objRetailInvoice.sInvno).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstRetialInvoice = data["Table"];
          this.lstDummyQuoteListing = this.LstRetialInvoice;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstRetialInvoice.length / this.perPage);
        }
        //this.loaderService.hide();
      });
  }
  // save items
  public saveledgeraccount(){
    



    this.retailinvoiceservice.insertINVOICE(this.retailinvoiceservice.objRetailInvoice).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstRetialInvoice = data["Table1"];
        }
        //this.loaderService.hide();
        this.retailinvoiceservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.retailinvoiceservice.objRetailInvoice.ACNO = obj.ACNO.toString();
    this.retailinvoiceservice.objRetailInvoice.AgentEnqNo = obj.AgentEnqNo.toString();
    this.retailinvoiceservice.objRetailInvoice.FirstName = obj.FirstName.toString();
    this.retailinvoiceservice.objRetailInvoice.MiddleName = obj.MiddleName.toString();
    this.retailinvoiceservice.objRetailInvoice.LastName = obj.LastName.toString();
    this.retailinvoiceservice.objRetailInvoice.ACNAME = obj.ACNAME.toString();
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
    this.retailinvoiceservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  } 

}
