import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from './insurance.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit{

  constructor(public router :Router,
    public insuranceservice :InsuranceService,
    public paginationservice:PaginationService){}
    public LstInsurance  : any=[];
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
      this.insuranceservice.resetService();
      this.GETAfterSalesDetails();
      
    }
    public GETAfterSalesDetails() {
      debugger
      //this.loaderService.show();
      this.insuranceservice.GETAfterSalesDetails(this.insuranceservice.objInsurance.SINVNO).subscribe(
        
        data => {
          ;
          if (data != null && data["Table"][0] != undefined) {
            console.log(data["Table"]);
            this.LstInsurance = data["Table"];
            this.updatePaginationData(this.LstInsurance);
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
      let records = !this.searchText ? this.LstInsurance : this.filterRecords(this.LstInsurance);
      this.updatePaginationData(records);
    }
    // save items
    public saveledgeraccount(){
      
  
  
  
      this.insuranceservice.insertAfterSales(this.insuranceservice.objInsurance).subscribe(
        data => {
          if (data != null && data["Table"].length != 0) {
            debugger;
            alert(data["Table"][0].Column1);
          }
          if (data != null && data["Table1"].length != 0) {
            this.LstInsurance = data["Table1"];
          }
          //this.loaderService.hide();
          this.insuranceservice.resetService();
        });
    }
  
  
    // Edit Button
    public editItem(obj:any) {
      debugger;
      this.isVisibleChild=true;
      this.isVisibleParent=false;
  
      this.insuranceservice.objInsurance.FirstName = obj.FirstName.toString();
      this.insuranceservice.objInsurance.AgentEnqNo = obj.AgentEnqNo.toString();
      this.insuranceservice.objInsurance.ACNO = obj.ACNO.toString();
      this.insuranceservice.objInsurance.MiddleName = obj.MiddleName.toString();
      this.insuranceservice.objInsurance.LastName = obj.LastName.toString();
      this.insuranceservice.objInsurance.ACNAME = obj.ACNAME.toString();
    }
   
    //new button
    public newItem(){
      debugger;
      this.insuranceservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }
}
