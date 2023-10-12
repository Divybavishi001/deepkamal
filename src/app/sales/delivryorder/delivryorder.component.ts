import { Component,OnInit } from '@angular/core';
import { DelivryorderService } from './delivryorder.service';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-delivryorder',
  templateUrl: './delivryorder.component.html',
  styleUrls: ['./delivryorder.component.css']
})
export class DelivryorderComponent implements OnInit{
  constructor(public router :Router,
    public Deliveryorderservice : DelivryorderService,
    public paginationservice:PaginationService){}
    public LstDo : any = [];
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
    this.Deliveryorderservice.resetService();
    this.getdo();
    
  }
  public getdo() {
    debugger
    //this.loaderService.show();
    this.Deliveryorderservice.getdo(this.Deliveryorderservice.objDeliveryOrder.DONo).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstDo = data["Table"];
          this.updatePaginationData(this.LstDo);
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
    let records = !this.searchText ? this.LstDo : this.filterRecords(this.LstDo);
    this.updatePaginationData(records);
  }
  // save items
  public saveledgeraccount(){
    



    this.Deliveryorderservice.insertDo(this.Deliveryorderservice.objDeliveryOrder).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstDo = data["Table1"];
        }
        //this.loaderService.hide();
        this.Deliveryorderservice.resetService();
      });
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    this.Deliveryorderservice.objDeliveryOrder.ACNO = obj.ACNO.toString();
    this.Deliveryorderservice.objDeliveryOrder.AgentEnqNo = obj.AgentEnqNo.toString();
    this.Deliveryorderservice.objDeliveryOrder.FirstName = obj.FirstName.toString();
    this.Deliveryorderservice.objDeliveryOrder.MiddleName = obj.MiddleName.toString();
    this.Deliveryorderservice.objDeliveryOrder.LastName = obj.LastName.toString();
    this.Deliveryorderservice.objDeliveryOrder.ACNAME = obj.ACNAME.toString();
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
    this.Deliveryorderservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    
  }
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  }

}
