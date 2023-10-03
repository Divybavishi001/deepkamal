import { Component,OnInit,ViewChild } from '@angular/core';
import { EnquiryService } from './enquiry.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{
  @ViewChild('tableSort', { static: true }) sort: MatSort;
  constructor(public router: Router,
  public enquiryservice :EnquiryService){this.sort = new MatSort();}




  public LstEnquiry : any = [];
  public sortedData : any = [];

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
   
  } 
  ngAfterViewInit(): void {
    if (this.sort) {
      this.itemsToDisplay.sort = this.sort;
    }
  }
  public getEnquiry() {
    debugger
   
    //this.loaderService.show();
    this.enquiryservice.getEnquiry(this.enquiryservice.objEnquiry.EnquiryNo).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstEnquiry = data["Table"];
          this.lstDummyQuoteListing = this.LstEnquiry;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstEnquiry.length / this.perPage);
        }
        //this.loaderService.hide();
      });
  }
  // save items
  public saveEnquiry(){
  

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
  //new button
  public newItem(){
    debugger;
    this.enquiryservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }

  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.enquiryservice.objEnquiry.EnquiryNo = obj.EnquiryNo.toString();
    this.enquiryservice.objEnquiry.ENQUIRYDT = obj.ENQUIRYDT.toString();
    this.enquiryservice.objEnquiry.FirstName = obj.FirstName.toString();
    this.enquiryservice.objEnquiry.Mobile = obj.Mobile.toString();
    this.enquiryservice.objEnquiry.vehcode = obj.vehcode.toString();
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
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }

}

