import { Component ,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { CrtempService } from './crtemp.service';

@Component({
  selector: 'app-crtemp',
  templateUrl: './crtemp.component.html',
  styleUrls: ['./crtemp.component.css']
})
export class CrtempComponent implements OnInit {
  constructor(public router: Router,
    public crtempservice :CrtempService){}
    public LstCrtemp  : any=[];
  
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
            this.lstDummyQuoteListing = this.LstCrtemp;
            this.itemsToDisplay = this.paginate(this.current, this.perPage);
            this.total = Math.ceil(this.LstCrtemp.length / this.perPage);
          }
          //this.loaderService.hide();
        });
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
      this.crtempservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }

}
