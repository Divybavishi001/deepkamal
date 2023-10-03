import { Component ,OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { BankreceiptService } from './bankreceipt.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bankreceipt',
  templateUrl: './bankreceipt.component.html',
  styleUrls: ['./bankreceipt.component.css']
})
export class BankreceiptComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort; // Add '!' to indicate that it will be initialized later
  constructor(public router :Router,
    public bankreceiptservice :BankreceiptService
){  this.dataSource = new MatTableDataSource<any>([]);
}
    public LstBankreceipt  : any=[];
    dataSource: MatTableDataSource<any>;
    // FOR PAGINATION
    public lstDummyQuoteListing: any = [];
    public itemsToDisplay: any = [];
    public current: number = 1;
    public total: number=1;
    public perPage = 10;
  
    public isVisibleParent: boolean = true;
    public isVisibleChild:boolean=false;
  
    public ngOnInit(): void {
      this.dataSource = new MatTableDataSource(this.itemsToDisplay);
      this.itemsToDisplay.sort((a : any, b : any) => a.AcNo - b.AcNo);
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
            this.lstDummyQuoteListing = this.LstBankreceipt;
            this.itemsToDisplay = this.paginate(this.current, this.perPage);
            this.total = Math.ceil(this.LstBankreceipt.length / this.perPage);
          }
          //this.loaderService.hide();
        });
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
      this.bankreceiptservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }
}
