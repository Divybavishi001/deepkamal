import { Component } from '@angular/core';
import { QuotationService } from './quotation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent {
  constructor(public router:Router,
  public quotationservice :QuotationService){}
  public LstQuoatation : any = [];

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
          this.lstDummyQuoteListing = this.LstQuoatation;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstQuoatation.length / this.perPage);
        }
        //this.loaderService.hide();
      });
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
}
