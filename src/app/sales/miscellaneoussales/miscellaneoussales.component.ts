import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MiscellaneoussalesService } from './miscellaneoussales.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-miscellaneoussales',
  templateUrl: './miscellaneoussales.component.html',
  styleUrls: ['./miscellaneoussales.component.css']
})
export class MiscellaneoussalesComponent {
  constructor(public router:Router,
    public miscellaneousservice : MiscellaneoussalesService,
    public paginationservice:PaginationService){}
  public LstMiscellSales  : any=[];
  public searchText :any =[];
  
  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public lstdb: any = [];
  public lstac: any = [];
  public lstloc: any = [];


  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;

  public ngOnInit(): void {
    this.miscellaneousservice.resetService();
    this.GETMiscSales();
    
  }
  public GETMiscSales() {
    debugger
    //this.loaderService.show();
    this.miscellaneousservice.GETMiscSales(this.miscellaneousservice.objMisSales.DOCNO).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstMiscellSales = data["Table"];
          this.updatePaginationData(this.LstMiscellSales);
        }
        if (data != null && data["Table1"].length != 0) {
          for (let i = 0; i < data["Table1"].length; i++) {
            this.lstdb.push({ "DBCODE": data["Table1"][i].DBCODE.toString(),
             "DBNAME": data["Table1"][i].DBNAME.toString() });
          }
        }
        if (data != null && data["Table2"].length != 0) {
          for (let i = 0; i < data["Table2"].length; i++) {
            this.lstac.push({ "ACNO": data["Table2"][i].ACNO.toString(),
             "ACNAME": data["Table2"][i].ACNAME.toString() });
          }
        }
        if (data != null && data["Table3"].length != 0) {
          for (let i = 0; i < data["Table3"].length; i++) {
            this.lstloc.push({ "LocationCode": data["Table3"][i].LocationCode.toString(),
             "LocationName": data["Table3"][i].LocationName.toString() });
          }
        }
        //this.loaderService.hide();
      });
  }
  public getdbdetails($event :any) {
    this.miscellaneousservice.objMisSales.DBNAME = this.lstdb[$event.target.selectedIndex].DBNAME;
  }
  public getacdetails($event :any) {
    this.miscellaneousservice.objMisSales.ACNAME = this.lstac[$event.target.selectedIndex].ACNAME;
  }
  public getlocdetails($event :any) {
    this.miscellaneousservice.objMisSales.LocationName = this.lstloc[$event.target.selectedIndex].LocationName;
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
    let records = !this.searchText ? this.LstMiscellSales : this.filterRecords(this.LstMiscellSales);
    this.updatePaginationData(records);
  }
  // save items
  public saveledgeraccount(){
    this.miscellaneousservice.insertMiscSales(this.miscellaneousservice.objMisSales).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstMiscellSales = data["Table1"];
        }
        //this.loaderService.hide();
        this.miscellaneousservice.resetService();
      });
      this.isVisibleChild=false;
      this.isVisibleParent=true;
      window.location.reload();
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    if (obj.dbcode != null){this.miscellaneousservice.objMisSales.dbcode = obj.dbcode.toString()} ;
    if (obj.DOCNO != null){this.miscellaneousservice.objMisSales.DOCNO = obj.DOCNO.toString()} ;
    // if (obj.DBNAME != null){this.miscellaneousservice.objMisSales.DBNAME = obj.DBNAME.toString()} ;
    if (obj.docdt != null){this.miscellaneousservice.objMisSales.docdt = obj.docdt.toString()} ;
    if (obj.InvNo != null){this.miscellaneousservice.objMisSales.InvNo = obj.InvNo.toString()} ;
    if (obj.INVDATE != null){this.miscellaneousservice.objMisSales.INVDATE = obj.INVDATE.toString()} ;
    if (obj.ACNO != null){this.miscellaneousservice.objMisSales.ACNO = obj.ACNO.toString()} ;
    // if (obj.ACNAME != null){this.miscellaneousservice.objMisSales.ACNAME = obj.ACNAME.toString()} ;
    if (obj.AddCode != null){this.miscellaneousservice.objMisSales.AddCode = obj.AddCode.toString()} ;
    if (obj.BRANCHCD != null){this.miscellaneousservice.objMisSales.BRANCHCD = obj.BRANCHCD.toString()} ;
    if (obj.vertualBranch != null){this.miscellaneousservice.objMisSales.vertualBranch = obj.vertualBranch.toString()} ;
    if (obj.CASHPARTY != null){this.miscellaneousservice.objMisSales.CASHPARTY = obj.CASHPARTY.toString()} ;
    if (obj.LocCode != null){this.miscellaneousservice.objMisSales.LocCode = obj.LocCode.toString()} ;
    if (obj.LocName != null){this.miscellaneousservice.objMisSales.LocName = obj.LocName.toString()} ;
    if (obj.RCHGYN != null){this.miscellaneousservice.objMisSales.RCHGYN = obj.RCHGYN.toString()} ;
    if (obj.VEHSALITEMNo != null){this.miscellaneousservice.objMisSales.VEHSALITEMNo = obj.VEHSALITEMNo.toString()} ;
    if (obj.vehinv != null){this.miscellaneousservice.objMisSales.vehinv = obj.vehinv.toString()} ;
    if (obj.entdate != null){this.miscellaneousservice.objMisSales.entdate = obj.entdate.toString()} ;
    if (obj.DBTYPE != null){this.miscellaneousservice.objMisSales.DBTYPE = obj.DBTYPE.toString()} ;
    
   
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
    this.miscellaneousservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    let currentDate = new Date().toISOString().substring(0,10);
    this.miscellaneousservice.objMisSales.docdt = currentDate;
    // this.miscellaneousservice.objMisSales.maxEnquiryNo = obj.maxEnquiryNo.toString()
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
