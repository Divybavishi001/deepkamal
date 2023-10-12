import {Component} from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { FollowupService } from './followup.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css']
})
export class FollowupComponent {
  constructor(public router : Router,
    public followupservice : FollowupService,
    public paginationservice: PaginationService){}
    public LstFollowup : any = [];
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
    this.followupservice.resetService();
    this.getFollowup();
    
  }
  public getFollowup(){
    debugger
    this.followupservice.getEnquiry(this.followupservice.objFollowup.EnquiryNo).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstFollowup = data["Table"];
          this.updatePaginationData(this.LstFollowup);
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
    let records = !this.searchText ? this.LstFollowup : this.filterRecords(this.LstFollowup);
    this.updatePaginationData(records);
  }
  // save items
  public saveQuatation(){
  

    this.followupservice.insertEnquiry(this.followupservice.objFollowup).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstFollowup = data["Table1"];
        }
        //this.loaderService.hide();
        this.followupservice.resetService();
      });
  }
  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.followupservice.objFollowup.EnquiryNo = obj.EnquiryNo.toString();
    this.followupservice.objFollowup.ENQUIRYDT = obj.ENQUIRYDT.toString();
    this.followupservice.objFollowup.VisitorName = obj.VisitorName.toString();
    this.followupservice.objFollowup.Mobile = obj.Mobile.toString();
    this.followupservice.objFollowup.vehcode = obj.vehcode.toString();
    /* this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString(); */
    
  }
  public newItem(){
    debugger;
    this.followupservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}






