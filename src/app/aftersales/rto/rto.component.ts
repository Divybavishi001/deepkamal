import { Component, ViewChild } from '@angular/core';
import { RtoService } from './rto.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-rto',
  templateUrl: './rto.component.html',
  styleUrls: ['./rto.component.css']
})
export class RtoComponent {
  constructor(public router :Router,
    public rtoservice :RtoService){}
    @ViewChild(MatSort, { static: true }) sort !: MatSort;
    public LstRto  : any=[];
  
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
            this.lstDummyQuoteListing = this.LstRto;
            this.itemsToDisplay = this.paginate(this.current, this.perPage);
            this.total = Math.ceil(this.LstRto.length / this.perPage);
          }
          //this.loaderService.hide();
        });
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
      this.rtoservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }

  
}
