import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { DatbooktypeService } from './datbooktype.service';

@Component({
  selector: 'app-datbooktype',
  templateUrl: './daybooktype.component.html',
  styleUrls: ['./daybooktype.component.css']
})
  export class DaybooktypeComponent implements OnInit {
       //@ViewChild('dbtype') dbtypeElement: ElementRef;
  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;
    constructor(public DatbooktypeService:DatbooktypeService,
      //private loaderService: LoaderService,
      public router: Router) { }
    public LstDaybookType: any = [];
    ngOnInit(): void {
      //this.loaderService.show();
      debugger;
      this.DatbooktypeService.resetService();
      this.getBooktype();
    }
    public getBooktype() {
      debugger
      //this.loaderService.show();
      this.DatbooktypeService.getBooktype().subscribe(
        
        data => {
          ;
          if (data != null && data["Table"][0] != undefined) {
            console.log(data["Table"]);
            this.LstDaybookType = data["Table"];
          }
          //this.loaderService.hide();
        });
    }

  
  public saveDatbooktype() {
    debugger;
    if (this.DatbooktypeService.objBooktype.dbtype.trim() == "") {
      alert("Please enter DB Type.");
      
      return;
    }
    if (this.DatbooktypeService.objBooktype.dbname.trim() == "") {
      alert("Please enter DB Name.");
      
      return;
    }
    
    
   // this.loaderService.show();
    this.DatbooktypeService.insertBooktype(this.DatbooktypeService.objBooktype).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstDaybookType = data["Table1"];
        }
        //this.loaderService.hide();
        this.DatbooktypeService.resetService();
      });
  }
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;
        //this.dbtypeElement.nativeElement.focus();
    this.DatbooktypeService.objBooktype. dbtype = obj.dbtype.toString();
    this.DatbooktypeService.objBooktype. dbname = obj.dbname.toString();
    this.DatbooktypeService.objBooktype. active = obj.active.toString();
    
  }
  public dltItem(obj:any){

  }
}
