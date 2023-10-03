import {Component} from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { FollowupService } from './followup.service';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css']
})
export class FollowupComponent {
  constructor(public router : Router,
    public followupservice : FollowupService){}
    public LstFollowup : any = [];

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
          this.lstDummyQuoteListing = this.LstFollowup;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstFollowup.length / this.perPage);
        }
        //this.loaderService.hide();
      });
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






