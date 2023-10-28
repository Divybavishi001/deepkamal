import { Component,OnInit,ViewChild } from '@angular/core';
import { EnquiryService } from './enquiry.service';
import { Router } from '@angular/router';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PaginationService } from 'src/app/pagination/pagination.service';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{
  constructor(public router: Router,
  public enquiryservice :EnquiryService,
  public paginationservice: PaginationService){}




  public LstEnquiry : any = [];
  public sortedData : any = [];
  public searchText ="";
  // public InqNo ="";
  public lstBranchCode: any = [];
  public lstSalesMan: any = [];
  public lstItem: any = [];
  public lstsource: any = [];
  public lstinqtype: any = [];
  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;


  public ngOnInit(): void {
    
    this.enquiryservice.resetService();
    this.getEnquiry();
        this.itemsToDisplay.sort(this.compareFunction);

   
  } 
  compareFunction(a: any, b: any): number {
    if (a.paramToSortBy < b.paramToSortBy) {
      return -1;
    }
    if (a.paramToSortBy > b.paramToSortBy) {
      return 1;
    }
    return 0;
  }
  public getEnquiry() {
    debugger
   
    //this.loaderService.show();
    this.enquiryservice.getEnquiry(this.enquiryservice.objEnquiry.EnquiryNo).subscribe(
      
      data => {
        ;
        debugger
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstEnquiry = data["Table"];
          // this.lstDummyQuoteListing = this.LstEnquiry;
          // this.itemsToDisplay = this.paginate(this.current, this.perPage);
          // this.total = Math.ceil(this.LstEnquiry.length / this.perPage);
          this.updatePaginationData(this.LstEnquiry);
        }
        if (data != null && data["Table1"].length != 0) {
          for (let i = 0; i < data["Table1"].length; i++) {
            this.lstBranchCode.push({ "Branchcode": data["Table1"][i].Branchcode.toString(), "Branchname": data["Table1"][i].Branchname.toString() });
          }
        }
        if (data != null && data["Table2"].length != 0) {
          for (let i = 0; i < data["Table2"].length; i++) {
            this.lstSalesMan.push({ "SmCode": data["Table2"][i].SmCode.toString(),
             "SMname": data["Table2"][i].SMname.toString() });
          }
        }
        if (data != null && data["Table3"].length != 0) {
          for (let i = 0; i < data["Table3"].length; i++) {
            this.lstItem.push({ "ItemCode": data["Table3"][i].ItemCode.toString(),
             "ItemName": data["Table3"][i].ItemName.toString() });
          }
        }
        if (data != null && data["Table4"].length != 0) {
          for (let i = 0; i < data["Table4"].length; i++) {
            this.lstsource.push({ "SourceCode": data["Table4"][i].SourceCode.toString(),
             "SourceName": data["Table4"][i].SourceName.toString(),
             "Sub_Source_Code": data["Table4"][i].Sub_Source_Code.toString(),
             "Sub_Source_Name": data["Table4"][i].Sub_Source_Name.toString() });
          }
        }
        if (data != null && data["Table5"].length != 0) {
          for (let i = 0; i < data["Table5"].length; i++) {
            this.lstinqtype.push({ "TYPECODE": data["Table5"][i].TYPECODE.toString(),
             "TYPENAME": data["Table5"][i].TYPENAME.toString() });
          }
        }
        
        //this.loaderService.hide();
      });
  }
  public getBranchDetail($event :any) {
    this.enquiryservice.objEnquiry.Branchname = this.lstBranchCode[$event.target.selectedIndex].Branchname;
    this.enquiryservice.objEnquiry.Branchcode = this.lstBranchCode[$event.target.selectedIndex].Branchcode;
  }
  public getSalesManDetail($event :any) {

    this.enquiryservice.objEnquiry.SMname = this.lstSalesMan[$event.target.selectedIndex].SMname;
  }
  public getItemDetails($event :any) {

    this.enquiryservice.objEnquiry.ItemName = this.lstItem[$event.target.selectedIndex].ItemName;
  }
  public getinqsource($event :any) {

    this.enquiryservice.objEnquiry.SourceCode = this.lstsource[$event.target.selectedIndex].SourceCode;
    this.enquiryservice.objEnquiry.SourceName = this.lstsource[$event.target.selectedIndex].SourceName;
    this.enquiryservice.objEnquiry.Sub_Source_Code = this.lstsource[$event.target.selectedIndex].Sub_Source_Code;
    this.enquiryservice.objEnquiry.Sub_Source_Name = this.lstsource[$event.target.selectedIndex].Sub_Source_Name;
  }
 
  public gettypecode($event :any) {

    this.enquiryservice.objEnquiry.TYPENAME = this.lstinqtype[$event.target.selectedIndex].TYPENAME;
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
    let records = !this.searchText ? this.LstEnquiry : this.filterRecords(this.LstEnquiry);
    this.updatePaginationData(records);
  }

  // save items
  public saveEnquiry(){
    console.log('save item master called');
    debugger;
    if (this.enquiryservice.objEnquiry.EnquiryNo.trim() == '') {
      alert('Please enter Enquiry No');
      return;
    }
    
    // this.loaderService.show();
    this.enquiryservice.insertEnquiry(this.enquiryservice.objEnquiry)
      .subscribe((data) => {
        if (data != null && data['table'].length != 0) {
          debugger;
          alert("Data saved succesfully")
          alert(data['table'][0].column1);
        }
        if (data != null && data['Table1'].length != 0) {
          this.LstEnquiry = data['table1'];
          // this.resetForm();
        }
        debugger;
        // this.loaderService.show();
        //this.itemMasterservice.resetService();
        // this.showDiv = false;
        // this.getItemMaster();
        // this.isVisibleChild=false;
        // this.isVisibleParent=true;
      });
  }
  public (){
    this.enquiryservice.insertEnquiry(this.enquiryservice.objEnquiry).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstEnquiry = data["Table1"];
        }
        //this.loaderService.hide();
        this.enquiryservice.resetService();
      });
  }
  //search
  // search(value: string): void {
  //   const filterPipe = new FilterPipe();
  //   this.lstDummyQuoteListing = filterPipe.transform(this.LstEnquiry,value);// this.lstQuoteListing.filter(p => p.quoteCode.includes(value));
  //   //this.itemsToDisplay = this.lstQuoteListing.filter((val) => val.name.toLowerCase().includes(value));
  //   this.itemsToDisplay =this.lstDummyQuoteListing;
  //   this.total = Math.ceil(this.lstDummyQuoteListing.length / this.perPage);
  //   this.current=1;
  //   this.itemsToDisplay = this.paginate(this.current, this.perPage);
    
  // }

  

  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    // if (obj.Branchcode != null){this.enquiryservice.objEnquiry.Branchcode=obj.Branchcode.toString()}  ;
    // if (obj.Branchname != null){this.enquiryservice.objEnquiry.Branchname=obj.Branchname.toString()}  ;
    // if (obj.EnquiryNo != null){this.enquiryservice.objEnquiry.EnquiryNo=obj.EnquiryNo.toString()}  ;
    // if (obj.EnquiryDt != null){this.enquiryservice.objEnquiry.EnquiryDt=obj.EnquiryDt.toString()}  ;
    this.enquiryservice.objEnquiry.branch = obj.branch.toString(); 
    //this.enquiryservice.objEnquiry.Branchname = obj.Branchname.toString(); 
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryDt = obj.EnquiryDt.toString();
    this.enquiryservice.objEnquiry.SalesManCode = obj.SalesManCode.toString();
    //this.enquiryservice.objEnquiry.SMname = obj.SMname.toString();
    // this.enquiryservice.objEnquiry.SINVNO = obj.SINVNO.toString();
    // this.enquiryservice.objEnquiry.ACNO = obj.ACNO.toString();
    // this.enquiryservice.objEnquiry.sinvdt = obj.sinvdt.toString();
    this.enquiryservice.objEnquiry.INSTITUTECODE = obj.INSTITUTECODE.toString();
    this.enquiryservice.objEnquiry.ItemCode = obj.ItemCode.toString();
    //this.enquiryservice.objEnquiry.ItemName = obj.ItemName.toString();
    if (obj.FirstName != null){this.enquiryservice.objEnquiry.FirstName=obj.FirstName.toString()}  ;
    if (obj.MiddleName != null){this.enquiryservice.objEnquiry.MiddleName=obj.MiddleName.toString()}  ;
    if (obj.LastName != null){this.enquiryservice.objEnquiry.LastName=obj.LastName.toString()}  ;
   
    this.enquiryservice.objEnquiry.VisitorName = obj.VisitorName.toString();
    // this.enquiryservice.objEnquiry.BIRTHDATE = obj.BIRTHDATE.toString();
    // this.enquiryservice.objEnquiry.Mobile = obj.Mobile.toString();
    // this.enquiryservice.objEnquiry.Email = obj.Email.toString();
    // this.enquiryservice.objEnquiry.Add1 = obj.Add1.toString();
    // this.enquiryservice.objEnquiry.Add2 = obj.Add2.toString();
    // this.enquiryservice.objEnquiry.Add3 = obj.Add3.toString();
    // this.enquiryservice.objEnquiry.AREACD = obj.AREACD.toString();
    // this.enquiryservice.objEnquiry.AREA = obj.AREA.toString();
    // this.enquiryservice.objEnquiry.Pin = obj.Pin.toString();
    // this.enquiryservice.objEnquiry.statecd = obj.statecd.toString();
    // this.enquiryservice.objEnquiry.state = obj.state.toString();
    // this.enquiryservice.objEnquiry.ADHARNO = obj.ADHARNO.toString();  
    // this.enquiryservice.objEnquiry.PANNO = obj.PANNO.toString();
    // this.enquiryservice.objEnquiry.LICENCENO = obj.LICENCENO.toString();
    // this.enquiryservice.objEnquiry.ElectionCard = obj.ElectionCard.toString();
    // this.enquiryservice.objEnquiry.Mobile2 = obj.Mobile2.toString();
    // this.enquiryservice.objEnquiry.Mobile3 = obj.Mobile3.toString();
    // this.enquiryservice.objEnquiry.bookingamt = obj.bookingamt.toString();
   
    
  }
  // for paginate
  // 
  public newItem(){
    debugger;
    this.enquiryservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }

}

