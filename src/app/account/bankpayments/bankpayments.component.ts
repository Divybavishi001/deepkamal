import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BankpaymentsService } from './bankpayments.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-bankpayments',
  templateUrl: './bankpayments.component.html',
  styleUrls: ['./bankpayments.component.css']
})
export class BankpaymentsComponent implements OnInit {
constructor(public router:Router,
  public bankpaymentservice : BankpaymentsService,
  public paginationservice: PaginationService){}
  public  LstBankPayment : any=[];
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
    this.bankpaymentservice.resetService();
    this.GETAfterSalesDetails();
    
  }
  public GETAfterSalesDetails() {
    debugger
    //this.loaderService.show();
    this.bankpaymentservice.GETTransaction(this.bankpaymentservice.objBankPayment.DOCNO).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstBankPayment = data["Table"];
          this.updatePaginationData(this.LstBankPayment);
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
    let records = !this.searchText ? this.LstBankPayment : this.filterRecords(this.LstBankPayment);
    this.updatePaginationData(records);
  }
  // save items
  public saveledgeraccount(){
    



    this.bankpaymentservice.insertTransaction(this.bankpaymentservice.objBankPayment).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstBankPayment = data["Table1"];
        }
        //this.loaderService.hide();
        this.bankpaymentservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.bankpaymentservice.objBankPayment.FirstName = obj.FirstName.toString();
    this.bankpaymentservice.objBankPayment.AgentEnqNo = obj.AgentEnqNo.toString();
    this.bankpaymentservice.objBankPayment.ACNO = obj.ACNO.toString();
    this.bankpaymentservice.objBankPayment.MiddleName = obj.MiddleName.toString();
    this.bankpaymentservice.objBankPayment.LastName = obj.LastName.toString();
    this.bankpaymentservice.objBankPayment.ACNAME = obj.ACNAME.toString();
  }
  
  //new button
  public newItem(){
    debugger;
    this.bankpaymentservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
