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
  public lstbook  : any=[];
  public lstsalesman : any=[];
  public lstAGENT : any=[];
  public lstveh : any=[];
  public lstlocation : any=[];
  public lstbranch : any=[];
  public lsthpa : any=[];
  public lstprofile : any=[];

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
        if (data != null && data["Table1"].length != 0) {
          for (let i = 0; i < data["Table1"].length; i++) {
            this.lstbook.push({ "DBCODE": data["Table1"][i].DBCODE.toString(),
             "DBNAME": data["Table1"][i].DBNAME.toString() });
          }
        }
        if (data != null && data["Table2"].length != 0) {
          for (let i = 0; i < data["Table2"].length; i++) {
            this.lstsalesman.push({ "SmCode": data["Table2"][i].SmCode.toString(),
             "SMname": data["Table2"][i].SMname.toString() });
          }
        }
        if (data != null && data["Table3"].length != 0) {
          for (let i = 0; i < data["Table3"].length; i++) {
            this.lstAGENT.push({ "AgentCode": data["Table3"][i].AgentCode.toString(),
             "AgentNAme": data["Table3"][i].AgentNAme.toString() });
          }
        }
        if (data != null && data["Table4"].length != 0) {
          for (let i = 0; i < data["Table4"].length; i++) {
            this.lstveh.push({ "ItemCode": data["Table4"][i].ItemCode.toString(),
             "ItemName": data["Table4"][i].ItemName.toString() });
          }
        }
        if (data != null && data["Table5"].length != 0) {
          for (let i = 0; i < data["Table5"].length; i++) {
            this.lstlocation.push({ "LocationCode": data["Table5"][i].LocationCode.toString(),
             "LocationName": data["Table5"][i].LocationName.toString() });
          }
        }
        if (data != null && data["Table6"].length != 0) {
          for (let i = 0; i < data["Table6"].length; i++) {
            this.lstbranch.push({ "Branchcode": data["Table6"][i].Branchcode.toString(),
             "Branchname": data["Table6"][i].Branchname.toString() });
          }
        }
        if (data != null && data["Table7"].length != 0) {
          for (let i = 0; i < data["Table7"].length; i++) {
            this.lstprofile.push({ "profilecode": data["Table7"][i].profilecode.toString(),
             "profilename": data["Table7"][i].profilename.toString() });
          }
        }
        if (data != null && data["Table8"].length != 0) {
          for (let i = 0; i < data["Table8"].length; i++) {
            this.lsthpa.push({ "HPACode": data["Table8"][i].HPACode.toString(),
             "HPAName": data["Table8"][i].HPAName.toString() });
          }
        }
        
        //this.loaderService.hide();
      });
  }
  public getbookdetails($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.DBCODE = this.lstbook[$event.target.selectedIndex].DBCODE;
    this.bookingreceiptservice.Objbookingreceipt.DBNAME = this.lstbook[$event.target.selectedIndex].DBNAME;
  }
  public getsalesmandetails($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.SMname = this.lstsalesman[$event.target.selectedIndex].SMname;
  }
  public getagentdetails($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.AgentNAme = this.lstAGENT[$event.target.selectedIndex].AgentNAme;
  }
  public getvehicledetails($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.ItemName = this.lstveh[$event.target.selectedIndex].ItemName;
  }
  public getlocationdetails($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.LocationName = this.lstlocation[$event.target.selectedIndex].LocationName;
  }
  public getbranch($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.Branchname = this.lstbranch[$event.target.selectedIndex].Branchname;
  }
  public gethpadetails($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.HPAName = this.lsthpa[$event.target.selectedIndex].HPAName;
  }
  public getprofile($event :any) {
    this.bookingreceiptservice.Objbookingreceipt.profilename = this.lstprofile[$event.target.selectedIndex].profilename;
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

    if (obj.DBCODE != null){this.bookingreceiptservice.Objbookingreceipt.DBCODE = obj.DBCODE.toString()} ;
    if (obj.DBNAME != null){this.bookingreceiptservice.Objbookingreceipt.DBNAME = obj.DBNAME.toString()} ;
    if (obj.AcNo != null){this.bookingreceiptservice.Objbookingreceipt.AcNo = obj.AcNo.toString()} ;
    if (obj.ACNAME != null){this.bookingreceiptservice.Objbookingreceipt.ACNAME = obj.ACNAME.toString()} ;
    if (obj.DOCNO != null){this.bookingreceiptservice.Objbookingreceipt.DOCNO = obj.DOCNO.toString()} ;
    if (obj.DOCDT != null){this.bookingreceiptservice.Objbookingreceipt.DOCDT = obj.DOCDT.toString()} ;
    if (obj.GSTTIN != null){this.bookingreceiptservice.Objbookingreceipt.GSTTIN = obj.GSTTIN.toString()} ;
    if (obj.Amount != null){this.bookingreceiptservice.Objbookingreceipt.Amount = obj.Amount.toString()} ;
    if (obj.DONO != null){this.bookingreceiptservice.Objbookingreceipt.DONO = obj.DONO.toString()} ;
    if (obj.GSTCD != null){this.bookingreceiptservice.Objbookingreceipt.GSTCD = obj.GSTCD.toString()} ;
    if (obj.NAR1 != null){this.bookingreceiptservice.Objbookingreceipt.NAR1 = obj.NAR1.toString()} ;
    if (obj.Nar2 != null){this.bookingreceiptservice.Objbookingreceipt.Nar2 = obj.Nar2.toString()} ;
    if (obj.BranchCD != null){this.bookingreceiptservice.Objbookingreceipt.BranchCD = obj.BranchCD.toString()} ;
    if (obj.vertualBranch != null){this.bookingreceiptservice.Objbookingreceipt.vertualBranch = obj.vertualBranch.toString()} ;
    if (obj.NAR3 != null){this.bookingreceiptservice.Objbookingreceipt.NAR3 = obj.NAR3.toString()} ;
    if (obj.NAR4 != null){this.bookingreceiptservice.Objbookingreceipt.NAR4 = obj.NAR4.toString()} ;
    if (obj.NAR5 != null){this.bookingreceiptservice.Objbookingreceipt.NAR5 = obj.NAR5.toString()} ;
    if (obj.smcode != null){this.bookingreceiptservice.Objbookingreceipt.smcode = obj.smcode.toString()} ;
    if (obj.SMname != null){this.bookingreceiptservice.Objbookingreceipt.SMname = obj.SMname.toString()} ;
    if (obj.AgentCode != null){this.bookingreceiptservice.Objbookingreceipt.AgentCode = obj.AgentCode.toString()} ;
    if (obj.AgentNAme != null){this.bookingreceiptservice.Objbookingreceipt.AgentNAme = obj.AgentNAme.toString()} ;
    if (obj.VehicleCode != null){this.bookingreceiptservice.Objbookingreceipt.VehicleCode = obj.VehicleCode.toString()} ;
    if (obj.ItemName != null){this.bookingreceiptservice.Objbookingreceipt.ItemName = obj.ItemName.toString()} ;
    if (obj.LocationCode != null){this.bookingreceiptservice.Objbookingreceipt.LocationCode = obj.LocationCode.toString()} ;
    if (obj.LocationName != null){this.bookingreceiptservice.Objbookingreceipt.LocationName = obj.LocationName.toString()} ;
    if (obj.BranchCode != null){this.bookingreceiptservice.Objbookingreceipt.BranchCode = obj.BranchCode.toString()} ;
    if (obj.Branchname != null){this.bookingreceiptservice.Objbookingreceipt.Branchname = obj.Branchname.toString()} ;
    if (obj.hpacode != null){this.bookingreceiptservice.Objbookingreceipt.hpacode = obj.hpacode.toString()} ;
    if (obj.HPAName != null){this.bookingreceiptservice.Objbookingreceipt.HPAName = obj.HPAName.toString()} ;
    if (obj.PROFILECODE != null){this.bookingreceiptservice.Objbookingreceipt.PROFILECODE = obj.PROFILECODE.toString()} ;
    if (obj.profilename != null){this.bookingreceiptservice.Objbookingreceipt.profilename = obj.profilename.toString()} ;
    
  }
 
  //new button
  public newItem(){
    debugger;
    this.bookingreceiptservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    let currentDate = new Date().toISOString().substring(0,10);
    this.bookingreceiptservice.Objbookingreceipt.DOCDT = currentDate;
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
