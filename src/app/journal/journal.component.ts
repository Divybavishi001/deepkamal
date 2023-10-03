import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from './journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  constructor(public router: Router,
    public journalservice : JournalService){}
    public LstJournal  : any=[];
  
    // FOR PAGINATION
    public lstDummyQuoteListing: any = [];
    public itemsToDisplay: any = [];
    public current: number = 1;
    public total: number=1;
    public perPage = 10;
  
    public isVisibleParent: boolean = true;
    public isVisibleChild:boolean=false;
  
    public ngOnInit(): void {
      this.journalservice.resetService();
      this.getJournalTransaction();
      
    }
    public getJournalTransaction() {
      debugger
      //this.loaderService.show();
      this.journalservice.getJournalTransaction(this.journalservice.objRto.DBCODE).subscribe(
        
        data => {
          ;
          if (data != null && data["Table"][0] != undefined) {
            console.log(data["Table"]);
            this.LstJournal = data["Table"];
            this.lstDummyQuoteListing = this.LstJournal;
            this.itemsToDisplay = this.paginate(this.current, this.perPage);
            this.total = Math.ceil(this.LstJournal.length / this.perPage);
          }
          //this.loaderService.hide();
        });
    }
    // save items
    public saveledgeraccount(){
      
  
  
  
      this.journalservice.insertJournalTransaction(this.journalservice.objRto).subscribe(
        data => {
          if (data != null && data["Table"].length != 0) {
            debugger;
            alert(data["Table"][0].Column1);
          }
          if (data != null && data["Table1"].length != 0) {
            this.LstJournal = data["Table1"];
          }
          //this.loaderService.hide();
          this.journalservice.resetService();
        });
    }
  
  
    // Edit Button
    public editItem(obj:any) {
      debugger;
      this.isVisibleChild=true;
      this.isVisibleParent=false;
  
      this.journalservice.objRto.FirstName = obj.FirstName.toString();
      this.journalservice.objRto.AgentEnqNo = obj.AgentEnqNo.toString();
      this.journalservice.objRto.ACNO = obj.ACNO.toString();
      this.journalservice.objRto.MiddleName = obj.MiddleName.toString();
      this.journalservice.objRto.LastName = obj.LastName.toString();
      this.journalservice.objRto.ACNAME = obj.ACNAME.toString();
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
      this.journalservice.resetService();
      this.isVisibleChild=true;
      this.isVisibleParent=false;
      
    }
    public back(){
      this.isVisibleChild=false;
      this.isVisibleParent=true;
    }
}
