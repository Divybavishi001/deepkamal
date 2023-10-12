import { Component, ViewChild } from '@angular/core';
import { RtoService } from './rto.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-rto',
  templateUrl: './rto.component.html',
  styleUrls: ['./rto.component.css']
})
export class RtoComponent {
  constructor(public router :Router,
    public rtoservice :RtoService,
    public paginationservice:PaginationService){}
    @ViewChild(MatSort, { static: true }) sort !: MatSort;
    public LstRto  : any=[];
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
      this.rtoservice.resetService();
      this.GETAfterSalesDetails();
      this.itemsToDisplay.sort = this.sort;
    }
    public GETAfterSalesDetails() {
      debugger
      //this.loaderService.show();
      this.rtoservice.GETAfterSalesDetails(this.rtoservice.objRto.SINVNO).subscribe(
        
        data => {
          ;
          if (data != null && data["Table"][0] != undefined) {
            console.log(data["Table"]);
            this.LstRto = data["Table"];
            this.updatePaginationData(this.LstRto);
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
      let records = !this.searchText ? this.LstRto : this.filterRecords(this.LstRto);
      this.updatePaginationData(records);
    }
    // save items
    public saveledgeraccount(){
      
  
  
  
      this.rtoservice.insertAfterSales(this.rtoservice.objRto).subscribe(
        data => {
          if (data != null && data["Table"].length != 0) {
            debugger;
            alert(data["Table"][0].Column1);
          }
          if (data != null && data["Table1"].length != 0) {
            this.LstRto = data["Table1"];
          }
          //this.loaderService.hide();
          this.rtoservice.resetService();
        });
    }
  
  
    // Edit Button
    public editItem(obj:any) {
      debugger;
      this.isVisibleChild=true;
      this.isVisibleParent=false;
  
      this.rtoservice.objRto.FirstName = obj.FirstName.toString();
      this.rtoservice.objRto.AgentEnqNo = obj.AgentEnqNo.toString();
      this.rtoservice.objRto.ACNO = obj.ACNO.toString();
      this.rtoservice.objRto.MiddleName = obj.MiddleName.toString();
      this.rtoservice.objRto.LastName = obj.LastName.toString();
      this.rtoservice.objRto.ACNAME = obj.ACNAME.toString();
    }
    
    //new button
    public newItem(){
      debugger;
      this.rtoservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }

  
}
