import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from './journal.service';
import { PaginationService } from 'src/app/pagination/pagination.service';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  constructor(public router: Router,
    public journalservice: JournalService,
    public paginationservice: PaginationService) { }
  public LstJournal: any = [];
  public searchText: any = [];


  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number = 1;
  public perPage = 10;

  // rows = [{}]; // start with one row
  

  public isVisibleParent: boolean = true;
  public isVisibleChild: boolean = false;

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
          this.updatePaginationData(this.LstJournal);

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
    let records = !this.searchText ? this.LstJournal : this.filterRecords(this.LstJournal);
    this.updatePaginationData(records);
  }
  // save items
  public saveledgeraccount() {
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
  public editItem(obj: any) {
    debugger;
    this.isVisibleChild = true;
    this.isVisibleParent = false;

    this.journalservice.objRto.acno = obj.acno.toString();
    this.journalservice.objRto.ACNAME = obj.ACNAME.toString();
    this.journalservice.objRto.amount = obj.amount.toString();
    this.journalservice.objRto.DocNo = obj.DocNo.toString();
    this.journalservice.objRto.DBCODE = obj.DBCODE.toString();
    this.journalservice.objRto.DBNAME = obj.DBNAME.toString();
    this.journalservice.objRto.Nar1 = obj.Nar1.toString();
    this.journalservice.objRto.Nar2 = obj.Nar2.toString();
    this.journalservice.objRto.Nar3 = obj.Nar3.toString();
  }

  //new button
  public newItem() {
    debugger;
    this.journalservice.resetService();
    this.isVisibleChild = true;
    this.isVisibleParent = false;

  }
  public back() {
    this.isVisibleChild = false;
    this.isVisibleParent = true;
  }
  // public newRecord() {
  //   debugger;
  //   this.vehiclePurchaseService.listPurchaseDetails.push({
  //     vCode: "",
  //     vehicleName: "",
  //     qty: 0,
  //     rate: 0,
  //     netAmt: 0,
  //     gstcd: "",
  //     cgstr: "",
  //     sgstr: "",
  //     igstr: "",
  //     gstcessr: "",
  //     cgstAmt: "",
  //     sgstAmt: "",
  //     igstAmt: "",
  //     gcessAmt: "",
  //     totGST: "",
  //     totAmt: "",
  //     lotNo: ""
  //   });
  //   console.log(this.vehiclePurchaseService.listPurchaseDetails);
  // }
  public addRow() {
    debugger;
    this.journalservice.listpurjournal.push({
      "acno": "",
    "ACNAME": "",
    "amount": 0,
    "DocNo": "",
    "DBCODE": 0,
    "DBNAME": "",
    "Nar1": "",
    "Nar2": "",
    "Nar3": "",
    });
    console.log(this.journalservice.listpurjournal);
  }
    // public addNewRow(): void {
    //   this.itemsToDisplay.push({
    //     acno: '',
    //     ACNAME: '',
    //     amount: '',
    //     DocNo: '',
    //     DBCODE: '',
    //     DBNAME: '',
    //     Nar1: '',
    //     Nar2: '',
    //     Nar3: '',
    //     // Add other properties as needed
    //   });
    // }
  }

