import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CashpaymentsService } from './cashpayments.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-cashpayments',
  templateUrl: './cashpayments.component.html',
  styleUrls: ['./cashpayments.component.css']
})
export class CashpaymentsComponent implements OnInit{
  constructor(public router :Router,
    public cashpaymentsservice :CashpaymentsService,
    public paginationservice: PaginationService){}
    public LstCashPayments  : any=[];
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
      this.cashpaymentsservice.resetService();
      this.GETAfterSalesDetails();
      
    }
    public GETAfterSalesDetails() {
      debugger
      //this.loaderService.show();
      this.cashpaymentsservice.GETTransaction(this.cashpaymentsservice.objCashPayments.DOCNO).subscribe(
        
        data => {
          ;
          if (data != null && data["Table"][0] != undefined) {
            console.log(data["Table"]);
            this.LstCashPayments = data["Table"];
            this.updatePaginationData(this.LstCashPayments);
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
      let records = !this.searchText ? this.LstCashPayments : this.filterRecords(this.LstCashPayments);
      this.updatePaginationData(records);
    }
    // save items
    public saveledgeraccount(){
      
  
  
  
      this.cashpaymentsservice.insertTransaction(this.cashpaymentsservice.objCashPayments).subscribe(
        data => {
          if (data != null && data["Table"].length != 0) {
            debugger;
            alert(data["Table"][0].Column1);
          }
          if (data != null && data["Table1"].length != 0) {
            this.LstCashPayments = data["Table1"];
          }
          //this.loaderService.hide();
          this.cashpaymentsservice.resetService();
        });
    }
  
  
    // Edit Button
    public editItem(obj:any) {
      debugger;
      this.isVisibleChild=true;
      this.isVisibleParent=false;
  
      this.cashpaymentsservice.objCashPayments.FirstName = obj.FirstName.toString();
      this.cashpaymentsservice.objCashPayments.AgentEnqNo = obj.AgentEnqNo.toString();
      this.cashpaymentsservice.objCashPayments.ACNO = obj.ACNO.toString();
      this.cashpaymentsservice.objCashPayments.MiddleName = obj.MiddleName.toString();
      this.cashpaymentsservice.objCashPayments.LastName = obj.LastName.toString();
      this.cashpaymentsservice.objCashPayments.ACNAME = obj.ACNAME.toString();
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
      this.cashpaymentsservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }

}
