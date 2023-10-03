import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllotmentService } from './allotment.service';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-allotment',
  templateUrl: './allotment.component.html',
  styleUrls: ['./allotment.component.css']
})
export class AllotmentComponent implements OnInit {
  constructor(public router :Router,
    public allotmentservice : AllotmentService){}
    public LstAllot : any = [];


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
           this.lstDummyQuoteListing = this.LstAllot;
           this.itemsToDisplay = this.paginate(this.current, this.perPage);
           this.total = Math.ceil(this.LstAllot.length / this.perPage);
         }
         //this.loaderService.hide();
       });
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
     this.allotmentservice.resetService();
     this.isVisibleChild=true;
     this.isVisibleParent=false;
     
   }
   public back(){
     this.isVisibleChild=false;
     this.isVisibleParent=true;
   }

}
