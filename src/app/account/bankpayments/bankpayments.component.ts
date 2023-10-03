import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BankpaymentsService } from './bankpayments.service';
@Component({
  selector: 'app-bankpayments',
  templateUrl: './bankpayments.component.html',
  styleUrls: ['./bankpayments.component.css']
})
export class BankpaymentsComponent implements OnInit {
constructor(public router:Router,
  public bankpaymentservice : BankpaymentsService){}
  public  LstBankPayment : any=[];
  
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
          this.lstDummyQuoteListing = this.LstBankPayment;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstBankPayment.length / this.perPage);
        }
        //this.loaderService.hide();
      });
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
    this.bankpaymentservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
