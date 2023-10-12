import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookingreceiptService } from './bookingreceipt.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-bookingreceipt',
  templateUrl: './bookingreceipt.component.html',
  styleUrls: ['./bookingreceipt.component.css']
})
export class BookingreceiptComponent {
  constructor(public router:Router,
    public bookingreceiptservice : BookingreceiptService,
    public paginationservice:PaginationService){}
  public LstBookingreceipt  : any=[];
  public searchText :any =[];
  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;

  public ngOnInit(): void {
    this.bookingreceiptservice.resetService();
    this.GETTransaction();
    
  }
  public GETTransaction() {
    debugger
    //this.loaderService.show();
    this.bookingreceiptservice.GETTransaction(this.bookingreceiptservice.Objbookingreceipt.DOCNO).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstBookingreceipt = data["Table"];
          this.updatePaginationData(this.LstBookingreceipt);
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
    let records = !this.searchText ? this.LstBookingreceipt : this.filterRecords(this.LstBookingreceipt);
    this.updatePaginationData(records);
  }
  // save items
  public saveledgeraccount(){
    



    this.bookingreceiptservice.insertTransaction(this.bookingreceiptservice.Objbookingreceipt).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstBookingreceipt = data["Table1"];
        }
        //this.loaderService.hide();
        this.bookingreceiptservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.bookingreceiptservice.Objbookingreceipt.ACNO = obj.ACNO.toString();
    this.bookingreceiptservice.Objbookingreceipt.AgentEnqNo = obj.AgentEnqNo.toString();
    this.bookingreceiptservice.Objbookingreceipt.FirstName = obj.FirstName.toString();
    this.bookingreceiptservice.Objbookingreceipt.MiddleName = obj.MiddleName.toString();
    this.bookingreceiptservice.Objbookingreceipt.LastName = obj.LastName.toString();
    this.bookingreceiptservice.Objbookingreceipt.ACNAME = obj.ACNAME.toString();
  }
 
  //new button
  public newItem(){
    debugger;
    this.bookingreceiptservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
