import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BankreceiptService } from './bankreceipt.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-bankreceipt',
  templateUrl: './bankreceipt.component.html',
  styleUrls: ['./bankreceipt.component.css']
})
export class BankreceiptComponent implements OnInit {
  constructor(public router :Router,
    public bankreceiptservice :BankreceiptService,
    public paginationservice: PaginationService){}
    public LstBankreceipt  : any=[];
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
      this.bankreceiptservice.resetService();
      this.GETAfterSalesDetails();
      
    }
    public GETAfterSalesDetails() {
      debugger
      //this.loaderService.show();
      this.bankreceiptservice.GETTransaction(this.bankreceiptservice.objBankReceipt.DOCNO).subscribe(
        
        data => {
          ;
          if (data != null && data["Table"][0] != undefined) {
            console.log(data["Table"]);
            this.LstBankreceipt = data["Table"];
            this.updatePaginationData(this.LstBankreceipt);
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
      let records = !this.searchText ? this.LstBankreceipt : this.filterRecords(this.LstBankreceipt);
      this.updatePaginationData(records);
    }
    // save items
    public saveledgeraccount(){
      
  
  
  
      this.bankreceiptservice.insertTransaction(this.bankreceiptservice.objBankReceipt).subscribe(
        data => {
          if (data != null && data["Table"].length != 0) {
            debugger;
            alert(data["Table"][0].Column1);
          }
          if (data != null && data["Table1"].length != 0) {
            this.LstBankreceipt = data["Table1"];
          }
          //this.loaderService.hide();
          this.bankreceiptservice.resetService();
        });
    }
  
  
    // Edit Button
    public editItem(obj:any) {
      debugger;
      this.isVisibleChild=true;
      this.isVisibleParent=false;
  
      this.bankreceiptservice.objBankReceipt.FirstName = obj.FirstName.toString();
      this.bankreceiptservice.objBankReceipt.AgentEnqNo = obj.AgentEnqNo.toString();
      this.bankreceiptservice.objBankReceipt.ACNO = obj.ACNO.toString();
      this.bankreceiptservice.objBankReceipt.MiddleName = obj.MiddleName.toString();
      this.bankreceiptservice.objBankReceipt.LastName = obj.LastName.toString();
      this.bankreceiptservice.objBankReceipt.ACNAME = obj.ACNAME.toString();
    }
    
    //new button
    public newItem(){
      debugger;
      this.bankreceiptservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }
}
