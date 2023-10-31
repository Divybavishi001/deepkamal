import { Component,OnInit } from '@angular/core';
import { RetailinvoiceService } from './retailinvoice.service';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/pagination/pagination.service';

@Component({
  selector: 'app-retailinvoice',
  templateUrl: './retailinvoice.component.html',
  styleUrls: ['./retailinvoice.component.css']
})
export class RetailinvoiceComponent implements OnInit{
  constructor(public router:Router,
    public retailinvoiceservice : RetailinvoiceService,
    public paginationservice:PaginationService){}
  public LstRetialInvoice  : any=[];
  public LstReceiptInInvoice  : any=[];
  public lstbook  : any=[];
  public lstac  : any=[];
  public lstarea  : any=[];
  public lstrto  : any=[];
  public lstitem  : any=[];
  public lstcolor  : any=[];
  public lsthpa  : any=[];
  public lstagent  : any=[];
  public lstlocation  : any=[];
  public lstbranch  : any=[];
  public lstprofile  : any=[];
  public lstSkim  : any=[];
  

  public searchText :any =[];
  // FOR PAGINATION
  public lstDummyQuoteListing: any = [];
  public itemsToDisplay: any = [];
  public current: number = 1;
  public total: number=1;
  public perPage = 10;

  public isVisibleParent: boolean = true;
  public isVisibleChild:boolean=false;
  isInputDisabled: boolean = true;

  public ngOnInit(): void {
    this.retailinvoiceservice.resetService();
    this.getInvoice();
    
  }
  public getInvoice() {
    debugger
    //this.loaderService.show();
    this.retailinvoiceservice.getInvoice(this.retailinvoiceservice.objRetailInvoice.sInvno).subscribe(
      
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.LstRetialInvoice = data["Table"];
          this.updatePaginationData(this.LstRetialInvoice);
        }
        if (data != null && data["Table1"].length != 0) {
          for (let i = 0; i < data["Table1"].length; i++) {
            this.lstbook.push({ "DBCODE": data["Table1"][i].DBCODE.toString(),
             "DBNAME": data["Table1"][i].DBNAME.toString() });
          }
        }
        if (data != null && data["Table2"].length != 0) {
          for (let i = 0; i < data["Table2"].length; i++) {
            this.lstac.push({ "ACNO": data["Table2"][i].ACNO.toString(),
             "ACNAME": data["Table2"][i].ACNAME.toString() });
          }
        }
        if (data != null && data["Table3"].length != 0) {
          for (let i = 0; i < data["Table3"].length; i++) {
            this.lstarea.push({ "areacode": data["Table3"][i].areacode.toString(),
             "areaname": data["Table3"][i].areaname.toString() });
          }
        }
        if (data != null && data["Table4"].length != 0) {
          for (let i = 0; i < data["Table4"].length; i++) {
            this.lstrto.push({ "RTOCD": data["Table4"][i].RTOCD.toString(),
             "RTO": data["Table4"][i].RTO.toString() });
          }
        }
        if (data != null && data["Table5"].length != 0) {
          for (let i = 0; i < data["Table5"].length; i++) {
            this.lstitem.push({ "ItemCode": data["Table5"][i].ItemCode.toString(),
             "ItemName": data["Table5"][i].ItemName.toString() });
          }
        }
        if (data != null && data["Table6"].length != 0) {
          for (let i = 0; i < data["Table6"].length; i++) {
            this.lstcolor.push({ "COLORCODE": data["Table6"][i].COLORCODE.toString(),
             "COLORNAME": data["Table6"][i].COLORNAME.toString() });
          }
        }
        if (data != null && data["Table7"].length != 0) {
          for (let i = 0; i < data["Table7"].length; i++) {
            this.lsthpa.push({ "HPACode": data["Table7"][i].HPACode.toString(),
             "HPAName": data["Table7"][i].HPAName.toString() });
          }
        }
        if (data != null && data["Table8"].length != 0) {
          for (let i = 0; i < data["Table8"].length; i++) {
            this.lstagent.push({ "AgentCode": data["Table8"][i].AgentCode.toString(),
             "AgentNAme": data["Table8"][i].AgentNAme.toString() });
          }
        }
        if (data != null && data["Table9"].length != 0) {
          for (let i = 0; i < data["Table9"].length; i++) {
            this.lstlocation.push({ "LocationCode": data["Table9"][i].LocationCode.toString(),
             "LocationName": data["Table9"][i].LocationName.toString() });
          }
        }
        if (data != null && data["Table10"].length != 0) {
          for (let i = 0; i < data["Table10"].length; i++) {
            this.lstbranch.push({ "Branchcode": data["Table10"][i].Branchcode.toString(),
             "Branchname": data["Table10"][i].Branchname.toString() });
          }
        }
        if (data != null && data["Table11"].length != 0) {
          for (let i = 0; i < data["Table11"].length; i++) {
            this.lstprofile.push({ "profilecode": data["Table11"][i].profilecode.toString(),
             "profilename": data["Table11"][i].profilename.toString() });
          }
        }
        if (data != null && data["Table12"].length != 0) {
          for (let i = 0; i < data["Table12"].length; i++) {
            this.lstprofile.push({ "Skimcode": data["Table12"][i].Skimcode.toString(),
             "SkimName": data["Table12"][i].SkimName.toString() });
          }
        }
        if (data != null && data["Table13"].length != 0) {
          for (let i = 0; i < data["Table13"].length; i++) {
            this.LstReceiptInInvoice.push({  "ReceiptNo": data["Table13"][i].ReceiptNo.toString() });
          }
        }
        //this.loaderService.hide();
      });
  }
  
  public getbookdetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.DBNAME = this.lstbook[$event.target.selectedIndex].DBNAME;
  }
  public getReceiptInInvoice($event :any) {
    this.retailinvoiceservice.objRetailInvoice.ReceiptNo = this.LstReceiptInInvoice[$event.target.selectedIndex].ReceiptNo;
  }
  public getACdetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.ACNAME = this.lstac[$event.target.selectedIndex].ACNAME;
  }
  public getAreadetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.areaname = this.lstarea[$event.target.selectedIndex].areaname;
  }
  public getrtodetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.RTO = this.lstrto[$event.target.selectedIndex].RTO;
  }
  public getitemdetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.ItemName = this.lstitem[$event.target.selectedIndex].ItemName;
  }
  public getcolordetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.COLORNAME = this.lstcolor[$event.target.selectedIndex].COLORNAME;
  }
  public gethpadetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.HPAName = this.lsthpa[$event.target.selectedIndex].HPAName;
  }
  public getagentdetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.AgentNAme = this.lstagent[$event.target.selectedIndex].AgentNAme;
  }
  public getlocationdetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.LocationName = this.lstlocation[$event.target.selectedIndex].LocationName;
  }
  public getbranchdetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.Branchname = this.lstbranch[$event.target.selectedIndex].Branchname;
  }
  public getprofiledetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.profilename = this.lstprofile[$event.target.selectedIndex].profilename;
  }
  public getSkimdetails($event :any) {
    this.retailinvoiceservice.objRetailInvoice.SkimName = this.lstSkim[$event.target.selectedIndex].SkimName;
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
    let records = !this.searchText ? this.LstRetialInvoice : this.filterRecords(this.LstRetialInvoice);
    this.updatePaginationData(records);
  }
  // save items
  public saveledgeraccount(){
    this.retailinvoiceservice.insertINVOICE(this.retailinvoiceservice.objRetailInvoice).subscribe(
      data => {
        if (data != null && data["Table"].length != 0) {
          debugger;
          alert(data["Table"][0].Column1);
        }
        if (data != null && data["Table1"].length != 0) {
          this.LstRetialInvoice = data["Table1"];
        }
        //this.loaderService.hide();
        this.retailinvoiceservice.resetService();
      });
      this.isVisibleChild=false;
      this.isVisibleParent=true;
      window.location.reload();
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    this.isInputDisabled = !this.isInputDisabled;

    if (obj.sInvno != null){this.retailinvoiceservice.objRetailInvoice.sInvno = obj.sInvno.toString()} ;
    if (obj.sInvDt != null){this.retailinvoiceservice.objRetailInvoice.sInvDt = obj.sInvDt.toString()} ;
    if (obj.sSaleDt != null){this.retailinvoiceservice.objRetailInvoice.sSaleDt = obj.sSaleDt.toString()} ;
    if (obj.sDBCODE != null){this.retailinvoiceservice.objRetailInvoice.sDBCODE = obj.sDBCODE.toString()} ;
    if (obj.sReceiptNo != null){this.retailinvoiceservice.objRetailInvoice.sReceiptNo = obj.sReceiptNo.toString()} ;
    if (obj.DONO != null){this.retailinvoiceservice.objRetailInvoice.DONO = obj.DONO.toString()} ;
    if (obj.AllotDt != null){this.retailinvoiceservice.objRetailInvoice.AllotDt = obj.AllotDt.toString()} ;
    if (obj.DODT != null){this.retailinvoiceservice.objRetailInvoice.DODT = obj.DODT.toString()} ;
    if (obj.SItemInv != null){this.retailinvoiceservice.objRetailInvoice.SItemInv = obj.SItemInv.toString()} ;
    if (obj.TAXCODE != null){this.retailinvoiceservice.objRetailInvoice.TAXCODE = obj.TAXCODE.toString()} ;
    if (obj.ProposalSrno != null){this.retailinvoiceservice.objRetailInvoice.ProposalSrno = obj.ProposalSrno.toString()} ;
    if (obj.ACNO != null){this.retailinvoiceservice.objRetailInvoice.ACNO = obj.ACNO.toString()} ;
    if (obj.add1 != null){this.retailinvoiceservice.objRetailInvoice.add1 = obj.add1.toString()} ;
    if (obj.add2 != null){this.retailinvoiceservice.objRetailInvoice.add2 = obj.add2.toString()} ;
    if (obj.add3 != null){this.retailinvoiceservice.objRetailInvoice.add3 = obj.add3.toString()} ;
    if (obj.IRNno != null){this.retailinvoiceservice.objRetailInvoice.IRNno = obj.IRNno.toString()} ;
    if (obj.AREACD != null){this.retailinvoiceservice.objRetailInvoice.AREACD = obj.AREACD.toString()} ;
    if (obj.city != null){this.retailinvoiceservice.objRetailInvoice.city = obj.city.toString()} ;
    if (obj.pin != null){this.retailinvoiceservice.objRetailInvoice.pin = obj.pin.toString()} ;
    if (obj.RTO != null){this.retailinvoiceservice.objRetailInvoice.RTO = obj.RTO.toString()} ;
    if (obj.GJNO != null){this.retailinvoiceservice.objRetailInvoice.GJNO = obj.GJNO.toString()} ;
    if (obj.mobile != null){this.retailinvoiceservice.objRetailInvoice.mobile = obj.mobile.toString()} ;
    if (obj.Pho1 != null){this.retailinvoiceservice.objRetailInvoice.Pho1 = obj.Pho1.toString()} ;
    if (obj.VEHICLECODE != null){this.retailinvoiceservice.objRetailInvoice.VEHICLECODE = obj.VEHICLECODE.toString()} ;
    if (obj.CHASISNO != null){this.retailinvoiceservice.objRetailInvoice.CHASISNO = obj.CHASISNO.toString()} ;
    if (obj.ENGINENO != null){this.retailinvoiceservice.objRetailInvoice.ENGINENO = obj.ENGINENO.toString()} ;
    if (obj.SHORTCHASIS != null){this.retailinvoiceservice.objRetailInvoice.SHORTCHASIS = obj.SHORTCHASIS.toString()} ;
    if (obj.AgentEnqNo != null){this.retailinvoiceservice.objRetailInvoice.AgentEnqNo = obj.AgentEnqNo.toString()} ;
    if (obj.Color != null){this.retailinvoiceservice.objRetailInvoice.Color = obj.Color.toString()} ;
    if (obj.hpayn != null){this.retailinvoiceservice.objRetailInvoice.hpayn = obj.hpayn.toString()} ;
    if (obj.hpacode != null){this.retailinvoiceservice.objRetailInvoice.hpacode = obj.hpacode.toString()} ;
    if (obj.AgentCode != null){this.retailinvoiceservice.objRetailInvoice.AgentCode = obj.AgentCode.toString()} ;
    if (obj.sHPloanamount != null){this.retailinvoiceservice.objRetailInvoice.sHPloanamount = obj.sHPloanamount.toString()} ;
    if (obj.LOCATION != null){this.retailinvoiceservice.objRetailInvoice.LOCATION = obj.LOCATION.toString()} ;
    if (obj.BranchCode != null){this.retailinvoiceservice.objRetailInvoice.BranchCode = obj.BranchCode.toString()} ;
    if (obj.PROFILECODE != null){this.retailinvoiceservice.objRetailInvoice.PROFILECODE = obj.PROFILECODE.toString()} ;
    if (obj.Skimcode != null){this.retailinvoiceservice.objRetailInvoice.Skimcode = obj.Skimcode.toString()} ;
    if (obj.Discount != null){this.retailinvoiceservice.objRetailInvoice.Discount = obj.Discount.toString()} ;
    if (obj.rtopaidamt != null){this.retailinvoiceservice.objRetailInvoice.rtopaidamt = obj.rtopaidamt.toString()} ;
    if (obj.TopayRtO != null){this.retailinvoiceservice.objRetailInvoice.TopayRtO = obj.TopayRtO.toString()} ;
    if (obj.rtopaidno != null){this.retailinvoiceservice.objRetailInvoice.rtopaidno = obj.rtopaidno.toString()} ;
    if (obj.rtoremark != null){this.retailinvoiceservice.objRetailInvoice.rtoremark = obj.rtoremark.toString()} ;
    if (obj.INSPAID != null){this.retailinvoiceservice.objRetailInvoice.INSPAID = obj.INSPAID.toString()} ;
    if (obj.mafgdate != null){this.retailinvoiceservice.objRetailInvoice.mafgdate = obj.mafgdate.toString()} ;
    if (obj.MtaxToPayAmt != null){this.retailinvoiceservice.objRetailInvoice.MtaxToPayAmt = obj.MtaxToPayAmt.toString()} ;
    if (obj.RATE != null){this.retailinvoiceservice.objRetailInvoice.RATE = obj.RATE.toString()} ;
    if (obj.sMeterSrNo != null){this.retailinvoiceservice.objRetailInvoice.sMeterSrNo = obj.sMeterSrNo.toString()} ;
    if (obj.BatteryNo != null){this.retailinvoiceservice.objRetailInvoice.BatteryNo = obj.BatteryNo.toString()} ;
    if (obj.WITHMETER != null){this.retailinvoiceservice.objRetailInvoice.WITHMETER = obj.WITHMETER.toString()} ;
    if (obj.WITHACCES != null){this.retailinvoiceservice.objRetailInvoice.WITHACCES = obj.WITHACCES.toString()} ;
    if (obj.sBasicValue != null){this.retailinvoiceservice.objRetailInvoice.sBasicValue = obj.sBasicValue.toString()} ;
    if (obj.sBodyKit != null){this.retailinvoiceservice.objRetailInvoice.sBodyKit = obj.sBodyKit.toString()} ;
    if (obj.sTaxableAmt != null){this.retailinvoiceservice.objRetailInvoice.sTaxableAmt = obj.sTaxableAmt.toString()} ;
    if (obj.GSTCD != null){this.retailinvoiceservice.objRetailInvoice.GSTCD = obj.GSTCD.toString()} ;
    if (obj.HSNCODE != null){this.retailinvoiceservice.objRetailInvoice.HSNCODE = obj.HSNCODE.toString()} ;
    if (obj.sProposalDiscount != null){this.retailinvoiceservice.objRetailInvoice.sProposalDiscount = obj.sProposalDiscount.toString()} ;
    if (obj.CGST != null){this.retailinvoiceservice.objRetailInvoice.CGST = obj.CGST.toString()} ;
    if (obj.SGST != null){this.retailinvoiceservice.objRetailInvoice.SGST = obj.SGST.toString()} ;
    if (obj.GSTCESS != null){this.retailinvoiceservice.objRetailInvoice.GSTCESS = obj.GSTCESS.toString()} ;
    if (obj.CGSTR != null){this.retailinvoiceservice.objRetailInvoice.CGSTR = obj.CGSTR.toString()} ;
    if (obj.SGSTR != null){this.retailinvoiceservice.objRetailInvoice.SGSTR = obj.SGSTR.toString()} ;
    if (obj.GSTCESSR != null){this.retailinvoiceservice.objRetailInvoice.GSTCESSR = obj.GSTCESSR.toString()} ;
    if (obj.IGSTR != null){this.retailinvoiceservice.objRetailInvoice.IGSTR = obj.IGSTR.toString()} ;
    if (obj.sTotinvamt != null){this.retailinvoiceservice.objRetailInvoice.sTotinvamt = obj.sTotinvamt.toString()} ;
    if (obj.CashDiscount != null){this.retailinvoiceservice.objRetailInvoice.CashDiscount = obj.CashDiscount.toString()} ;
    if (obj.sinsurance != null){this.retailinvoiceservice.objRetailInvoice.sinsurance = obj.sinsurance.toString()} ;
    if (obj.sHPACharge != null){this.retailinvoiceservice.objRetailInvoice.sHPACharge = obj.sHPACharge.toString()} ;
    if (obj.MTOKENCHG != null){this.retailinvoiceservice.objRetailInvoice.MTOKENCHG = obj.MTOKENCHG.toString()} ;
    if (obj.SLIFETIMETAX != null){this.retailinvoiceservice.objRetailInvoice.SLIFETIMETAX = obj.SLIFETIMETAX.toString()} ;
    if (obj.SNOPLATECHG != null){this.retailinvoiceservice.objRetailInvoice.SNOPLATECHG = obj.SNOPLATECHG.toString()} ;
    if (obj.sCrTemp != null){this.retailinvoiceservice.objRetailInvoice.sCrTemp = obj.sCrTemp.toString()} ;
    if (obj.EntDate != null){this.retailinvoiceservice.objRetailInvoice.EntDate = obj.EntDate.toString()} ;
    if (obj.AcknoledgeDT != null){this.retailinvoiceservice.objRetailInvoice.AcknoledgeDT = obj.AcknoledgeDT.toString()} ;
    if (obj.insdt != null){this.retailinvoiceservice.objRetailInvoice.insdt = obj.insdt.toString()} ;
    if (obj.inspaidchdt != null){this.retailinvoiceservice.objRetailInvoice.inspaidchdt = obj.inspaidchdt.toString()} ;
    if (obj.EntDate != null){this.retailinvoiceservice.objRetailInvoice.EntDate = obj.EntDate.toString()} ;
    // if (obj.DOdt != null){this.retailinvoiceservice.objRetailInvoice.DOdt = obj.DOdt.toString()} ;
    
    if (obj.srto != null){this.retailinvoiceservice.objRetailInvoice.srto = obj.sGRANDTOTAL.toString()} ;
    if (obj.sHandlingCharge != null){this.retailinvoiceservice.objRetailInvoice.sHandlingCharge = obj.sHandlingCharge.toString()} ;
    if (obj.HCGSTA != null){this.retailinvoiceservice.objRetailInvoice.HCGSTA = obj.HCGSTA.toString()} ;
    if (obj.HSGSTA != null){this.retailinvoiceservice.objRetailInvoice.HSGSTA = obj.HSGSTA.toString()} ;
    if (obj.HANDLINGGSTNET != null){this.retailinvoiceservice.objRetailInvoice.HANDLINGGSTNET = obj.HANDLINGGSTNET.toString()} ;
    if (obj.SEXTWARANTY != null){this.retailinvoiceservice.objRetailInvoice.SEXTWARANTY = obj.SEXTWARANTY.toString()} ;
    if (obj.sBasicDiscount != null){this.retailinvoiceservice.objRetailInvoice.sBasicDiscount = obj.sBasicDiscount.toString()} ;
    if (obj.sOtherCharge1 != null){this.retailinvoiceservice.objRetailInvoice.sOtherCharge1 = obj.sOtherCharge1.toString()} ;
    if (obj.sGRANDTOTAL != null){this.retailinvoiceservice.objRetailInvoice.sGRANDTOTAL = obj.sGRANDTOTAL.toString()} ;
    if (obj.saccessories != null){this.retailinvoiceservice.objRetailInvoice.saccessories = obj.saccessories.toString()} ;
    if (obj.ACCESDB != null){this.retailinvoiceservice.objRetailInvoice.ACCESDB = obj.ACCESDB.toString()} ;
    if (obj.ACEESCD != null){this.retailinvoiceservice.objRetailInvoice.ACEESCD = obj.ACEESCD.toString()} ;
    if (obj.ACCESSINV != null){this.retailinvoiceservice.objRetailInvoice.ACCESSINV = obj.ACCESSINV.toString()} ;
    if (obj.ACCESGSTCD != null){this.retailinvoiceservice.objRetailInvoice.ACCESGSTCD = obj.ACCESGSTCD.toString()} ;
    if (obj.ACCESCGSTR != null){this.retailinvoiceservice.objRetailInvoice.ACCESCGSTR = obj.ACCESCGSTR.toString()} ;
    if (obj.ACCESSGSTR != null){this.retailinvoiceservice.objRetailInvoice.ACCESSGSTR = obj.ACCESSGSTR.toString()} ;
    if (obj.ACCESHSNNO != null){this.retailinvoiceservice.objRetailInvoice.ACCESHSNNO = obj.ACCESHSNNO.toString()} ;
    if (obj.sMeterFlag != null){this.retailinvoiceservice.objRetailInvoice.sMeterFlag = obj.sMeterFlag.toString()} ;
    if (obj.METERDB != null){this.retailinvoiceservice.objRetailInvoice.METERDB = obj.METERDB.toString()} ;
    if (obj.METERCD != null){this.retailinvoiceservice.objRetailInvoice.METERCD = obj.METERCD.toString()} ;
    if (obj.METERINV != null){this.retailinvoiceservice.objRetailInvoice.METERINV = obj.METERINV.toString()} ;
    if (obj.METERGSTCD != null){this.retailinvoiceservice.objRetailInvoice.METERGSTCD = obj.METERGSTCD.toString()} ;
    if (obj.METERCGSTR != null){this.retailinvoiceservice.objRetailInvoice.METERCGSTR = obj.METERCGSTR.toString()} ;
    if (obj.METERSGSTR != null){this.retailinvoiceservice.objRetailInvoice.METERSGSTR = obj.METERSGSTR.toString()} ;
    if (obj.METERHSNNO != null){this.retailinvoiceservice.objRetailInvoice.METERHSNNO = obj.METERHSNNO.toString()} ;
    if (obj.ACCESMETER != null){this.retailinvoiceservice.objRetailInvoice.ACCESMETER = obj.ACCESMETER.toString()} ;
    if (obj.bookingdiscno != null){this.retailinvoiceservice.objRetailInvoice.bookingdiscno = obj.bookingdiscno.toString()} ;
    if (obj.NGRANDTOTAL != null){this.retailinvoiceservice.objRetailInvoice.NGRANDTOTAL = obj.NGRANDTOTAL.toString()} ;
    if (obj.BranchCD != null){this.retailinvoiceservice.objRetailInvoice.BranchCD = obj.BranchCD.toString()} ;
   
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
    this.retailinvoiceservice.resetService();
    this.isVisibleChild=true;
    this.isVisibleParent=false;
    let currentDate = new Date().toISOString().substring(0,10);
    this.retailinvoiceservice.objRetailInvoice.sInvDt = currentDate;
    
  }
  
  public back(){
    this.isVisibleChild=false;
    this.isVisibleParent=true;
  } 

}
