import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MiscellaneoussalesService } from './miscellaneoussales.service';

@Component({
  selector: 'app-miscellaneoussales',
  templateUrl: './miscellaneoussales.component.html',
  styleUrls: ['./miscellaneoussales.component.css']
})
export class MiscellaneoussalesComponent {
  constructor(public router:Router,
    public miscellaneousservice : MiscellaneoussalesService){}
  public LstMiscellSales  : any=[];
  
  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;

  public ngOnInit(): void {
    this.miscellaneousservice.resetService();
    this.GETMiscSales();
    
  }
  public GETMiscSales() {
    debugger
    //this.loaderService.show();
    this.miscellaneousservice.GETMiscSales(this.miscellaneousservice.objMisSales.DocNo).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstMiscellSales = data["Table"];
          this.lstDummyQuoteListing = this.LstMiscellSales;
          this.itemsToDisplay = this.paginate(this.current, this.perPage);
          this.total = Math.ceil(this.LstMiscellSales.length / this.perPage);
        }
        //this.loaderService.hide();
      });
  }
  // save items
  public saveledgeraccount(){
    



    this.miscellaneousservice.insertMiscSales(this.miscellaneousservice.objMisSales).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstMiscellSales = data["Table1"];
        }
        //this.loaderService.hide();
        this.miscellaneousservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.miscellaneousservice.objMisSales.FirstName = obj.FirstName.toString();
    this.miscellaneousservice.objMisSales.AgentEnqNo = obj.AgentEnqNo.toString();
    this.miscellaneousservice.objMisSales.ACNO = obj.ACNO.toString();
    this.miscellaneousservice.objMisSales.MiddleName = obj.MiddleName.toString();
    this.miscellaneousservice.objMisSales.LastName = obj.LastName.toString();
    this.miscellaneousservice.objMisSales.ACNAME = obj.ACNAME.toString();
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
    this.miscellaneousservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }
}
