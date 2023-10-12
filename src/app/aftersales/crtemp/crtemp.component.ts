import { Component ,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { CrtempService } from './crtemp.service';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-crtemp',
  templateUrl: './crtemp.component.html',
  styleUrls: ['./crtemp.component.css']
})
export class CrtempComponent implements OnInit {
  constructor(public router: Router,
    public crtempservice :CrtempService,
    public paginationservice:PaginationService){}
    public LstCrtemp  : any=[];
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
      this.crtempservice.resetService();
      this.GETAfterSalesDetails();
      
    }
    public GETAfterSalesDetails() {
      debugger
      //this.loaderService.show();
      this.crtempservice.GETAfterSalesDetails(this.crtempservice.objCrtemp.SINVNO).subscribe(
        
        data => {
          ;
          if (data != null && data["Table"][0] != undefined) {
            console.log(data["Table"]);
            this.LstCrtemp = data["Table"];
            this.updatePaginationData(this.LstCrtemp);
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
      let records = !this.searchText ? this.LstCrtemp : this.filterRecords(this.LstCrtemp);
      this.updatePaginationData(records);
    }
    // save items
    public saveledgeraccount(){
      
  
  
  
      this.crtempservice.insertAfterSales(this.crtempservice.objCrtemp).subscribe(
        data => {
          if (data != null && data["Table"].length != 0) {
            debugger;
            alert(data["Table"][0].Column1);
          }
          if (data != null && data["Table1"].length != 0) {
            this.LstCrtemp = data["Table1"];
          }
          //this.loaderService.hide();
          this.crtempservice.resetService();
        });
    }
  
  
    // Edit Button
    public editItem(obj:any) {
      debugger;
      this.isVisibleChild=true;
      this.isVisibleParent=false;
  
      this.crtempservice.objCrtemp.FirstName = obj.FirstName.toString();
      this.crtempservice.objCrtemp.AgentEnqNo = obj.AgentEnqNo.toString();
      this.crtempservice.objCrtemp.ACNO = obj.ACNO.toString();
      this.crtempservice.objCrtemp.MiddleName = obj.MiddleName.toString();
      this.crtempservice.objCrtemp.LastName = obj.LastName.toString();
      this.crtempservice.objCrtemp.ACNAME = obj.ACNAME.toString();
    }
    
    //new button
    public newItem(){
      debugger;
      this.crtempservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }

}
