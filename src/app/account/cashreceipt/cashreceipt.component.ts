import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CashreceiptService } from './cashreceipt.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-cashreceipt',
  templateUrl: './cashreceipt.component.html',
  styleUrls: ['./cashreceipt.component.css']
})
export class CashreceiptComponent implements OnInit{
  constructor(public router:Router,
    public cashreceiptservice :CashreceiptService,
    public paginationservice: PaginationService){}
  public LstCashReceipt  : any=[];
  public searchText ="";
  
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
          this.updatePaginationData(this.LstCashReceipt);
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
    let records = !this.searchText ? this.LstCashReceipt : this.filterRecords(this.LstCashReceipt);
    this.updatePaginationData(records);
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
