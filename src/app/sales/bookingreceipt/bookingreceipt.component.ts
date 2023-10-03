import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookingreceiptService } from './bookingreceipt.service';

@Component({
  selector: 'app-bookingreceipt',
  templateUrl: './bookingreceipt.component.html',
  styleUrls: ['./bookingreceipt.component.css']
})
export class BookingreceiptComponent {
  constructor(public router:Router,
    public bookingreceiptservice : BookingreceiptService){}
  public LstBookingreceipt  : any=[];
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
          this.lstDummyQuoteListing = this.LstBookingreceipt;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstBookingreceipt.length / this.perPage);
        }
        //this.loaderService.hide();
      });
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
    this.bookingreceiptservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
