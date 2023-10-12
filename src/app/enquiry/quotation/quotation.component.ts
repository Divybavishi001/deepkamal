import { Component } from '@angular/core';
import { QuotationService } from './quotation.service';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent {
  constructor(public router:Router,
  public quotationservice :QuotationService,
  public paginationservice: PaginationService){}
  public LstQuoatation : any = [];
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
    this.quotationservice.resetService();
    this.getquotation();
    
  } 
  public getquotation(){
    debugger
    this.quotationservice.getEnquiry(this.quotationservice.objQuotation.EnquiryNo).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstQuoatation = data["Table"];
          this.updatePaginationData(this.LstQuoatation);
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
    let records = !this.searchText ? this.LstQuoatation : this.filterRecords(this.LstQuoatation);
    this.updatePaginationData(records);
  }
  // save items
  public saveQuatation(){
  

    this.quotationservice.insertEnquiry(this.quotationservice.objQuotation).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstQuoatation = data["Table1"];
        }
        //this.loaderService.hide();
        this.quotationservice.resetService();
      });
  }
  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.quotationservice.objQuotation.EnquiryNo = obj.EnquiryNo.toString();
    this.quotationservice.objQuotation.ENQUIRYDT = obj.ENQUIRYDT.toString();
    this.quotationservice.objQuotation.VisitorName = obj.VisitorName.toString();
    this.quotationservice.objQuotation.Mobile = obj.Mobile.toString();
    this.quotationservice.objQuotation.vehcode = obj.vehcode.toString();
    /* this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString(); */
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
