import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllotmentService } from './allotment.service';
import { ImplicitReceiver } from '@angular/compiler';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-allotment',
  templateUrl: './allotment.component.html',
  styleUrls: ['./allotment.component.css']
})
export class AllotmentComponent implements OnInit {
  constructor(public router :Router,
    public allotmentservice : AllotmentService,
    public paginationservice: PaginationService){}
    public LstAllot : any = [];
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
     this.allotmentservice.resetService();
     this.getdo();
     
   }
   public getdo() {
     debugger
     //this.loaderService.show();
     this.allotmentservice.getdo(this.allotmentservice.objAllotment.DONo).subscribe(
       
       data => {
         ;
         if (data != null && data["Table"][0] != undefined) {
           console.log(data["Table"]);
           this.LstAllot = data["Table"];
           this.updatePaginationData(this.LstAllot);
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
    let records = !this.searchText ? this.LstAllot : this.filterRecords(this.LstAllot);
    this.updatePaginationData(records);
  }
   // save items
   public saveledgeraccount(){
     
 
 
 
     this.allotmentservice.insertDo(this.allotmentservice.objAllotment).subscribe(
       data => {
         if (data != null && data["Table"].length != 0) {
           debugger;
           alert(data["Table"][0].Column1);
         }
         if (data != null && data["Table1"].length != 0) {
           this.LstAllot = data["Table1"];
         }
         //this.loaderService.hide();
         this.allotmentservice.resetService();
       });
   }
 
 
   // Edit Button
   public editItem(obj:any) {
     debugger;
     this.isVisibleChild=true;
     this.isVisibleParent=false;
 
     this.allotmentservice.objAllotment.ACNO = obj.ACNO.toString();
     this.allotmentservice.objAllotment.AgentEnqNo = obj.AgentEnqNo.toString();
     this.allotmentservice.objAllotment.FirstName = obj.FirstName.toString();
     this.allotmentservice.objAllotment.MiddleName = obj.MiddleName.toString();
     this.allotmentservice.objAllotment.LastName = obj.LastName.toString();
     this.allotmentservice.objAllotment.ACNAME = obj.ACNAME.toString();
   }
   
   //new button
   public newItem(){
     debugger;
     this.allotmentservice.resetService();
     this.isVisibleChild=true;
     this.isVisibleParent=false;
     
   }
   public back(){
     this.isVisibleChild=false;
     this.isVisibleParent=true;
   }

}
