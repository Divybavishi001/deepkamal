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
    public lstveh : any = [];
    public lstcolor : any = [];
    public lstmeter : any = [];
    public lstpayer : any = [];
    public lstagent : any = [];
    public lstprofile : any = [];

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
        if (data != null && data["Table1"].length != 0) {
          for (let i = 0; i < data["Table1"].length; i++) {
            this.lstveh.push({ "ItemCode": data["Table1"][i].ItemCode.toString(),
             "ItemName": data["Table1"][i].ItemName.toString() });
          }
        }
        if (data != null && data["Table2"].length != 0) {
          for (let i = 0; i < data["Table2"].length; i++) {
            this.lstcolor.push({ "COLORCODE": data["Table2"][i].COLORCODE.toString(),
             "COLORNAME": data["Table2"][i].COLORNAME.toString() });
          }
        }
        if (data != null && data["Table3"].length != 0) {
          for (let i = 0; i < data["Table3"].length; i++) {
            this.lstmeter.push({ "ItemMCODE": data["Table3"][i].ItemMCODE.toString(),
             "Product": data["Table3"][i].Product.toString() });
          }
        }
        if (data != null && data["Table4"].length != 0) {
          for (let i = 0; i < data["Table4"].length; i++) {
            this.lstpayer.push({ "ACNO": data["Table4"][i].ACNO.toString(),
             "ACNAME": data["Table4"][i].ACNAME.toString() });
          }
        }
        if (data != null && data["Table5"].length != 0) {
          for (let i = 0; i < data["Table5"].length; i++) {
            this.lstagent.push({ "AgentCode": data["Table5"][i].AgentCode.toString(),
             "AgentNAme": data["Table5"][i].AgentNAme.toString() });
          }
        }
        if (data != null && data["Table6"].length != 0) {
          for (let i = 0; i < data["Table6"].length; i++) {
            this.lstprofile.push({ "profilecode": data["Table6"][i].profilecode.toString(),
             "profilename": data["Table6"][i].profilename.toString() });
          }
        }
        //this.loaderService.hide();
      });
  }
  public getvehicledetails($event :any) {
    this.Deliveryorderservice.objDeliveryOrder.ItemName = this.lstcolor[$event.target.selectedIndex].ItemName;
  }
  public getcolordetails($event :any) {
    this.Deliveryorderservice.objDeliveryOrder.COLORNAME = this.lstveh[$event.target.selectedIndex].COLORNAME;
  }
  public getmeterdetails($event :any) {
    this.Deliveryorderservice.objDeliveryOrder.Product = this.lstmeter[$event.target.selectedIndex].Product;
  }
  public getpayerdetails($event :any) {
    this.Deliveryorderservice.objDeliveryOrder.ACNAME = this.lstpayer[$event.target.selectedIndex].ACNAME;
  }
  public getagentdetails($event :any) {
    this.Deliveryorderservice.objDeliveryOrder.AgentNAme = this.lstagent[$event.target.selectedIndex].AgentNAme;
  }
  public getprofiledetails($event :any) {
    this.Deliveryorderservice.objDeliveryOrder.profilename = this.lstprofile[$event.target.selectedIndex].profilename;
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
      (data) => {
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
      this.isVisibleChild=false;
      this.isVisibleParent=true;
      window.location.reload();
  }


  // Edit Button
  public editItem(obj:any) {
    debugger;
    this.isVisibleChild=true;
    this.isVisibleParent=false;

    if (obj.DONo != null){this.Deliveryorderservice.objDeliveryOrder.DONo = obj.DONo.toString()} ;
    if (obj.ReceiptNo != null){this.Deliveryorderservice.objDeliveryOrder.ReceiptNo = obj.ReceiptNo.toString()} ;
    if (obj.DoDate != null){this.Deliveryorderservice.objDeliveryOrder.DoDate = obj.DoDate.toString()} ;
    if (obj.VehicleCode != null){this.Deliveryorderservice.objDeliveryOrder.VehicleCode = obj.VehicleCode.toString()} ;
    //if (obj.ItemName != null){this.Deliveryorderservice.objDeliveryOrder.ItemName = obj.ItemName.toString()} ;
    //if (obj.Invno != null){this.Deliveryorderservice.objDeliveryOrder.Invno = obj.Invno.toString()} ;
    if (obj.qty != null){this.Deliveryorderservice.objDeliveryOrder.qty = obj.qty.toString()} ;
    if (obj.AllotDt != null){this.Deliveryorderservice.objDeliveryOrder.AllotDt = obj.AllotDt.toString()} ;
    if (obj.ChasisNo != null){this.Deliveryorderservice.objDeliveryOrder.ChasisNo = obj.ChasisNo.toString()} ;
    if (obj.EngineNo != null){this.Deliveryorderservice.objDeliveryOrder.EngineNo = obj.EngineNo.toString()} ;
    if (obj.BODYTYPE != null){this.Deliveryorderservice.objDeliveryOrder.BODYTYPE = obj.BODYTYPE.toString()} ;
    if (obj.ColorCode != null){this.Deliveryorderservice.objDeliveryOrder.ColorCode = obj.ColorCode.toString()} ;
    if (obj.COLORNAME != null){this.Deliveryorderservice.objDeliveryOrder.COLORNAME = obj.COLORNAME.toString()} ;
    if (obj.METERCD != null){this.Deliveryorderservice.objDeliveryOrder.METERCD = obj.METERCD.toString()} ;
    if (obj.Product != null){this.Deliveryorderservice.objDeliveryOrder.Product = obj.Product.toString()} ;
    if (obj.MeterSrno != null){this.Deliveryorderservice.objDeliveryOrder.MeterSrno = obj.MeterSrno.toString()} ;
    if (obj.gaskitno != null){this.Deliveryorderservice.objDeliveryOrder.gaskitno = obj.gaskitno.toString()} ;
    if (obj.TANKNO != null){this.Deliveryorderservice.objDeliveryOrder.TANKNO = obj.TANKNO.toString()} ;
    if (obj.CYLINSTALDT != null){this.Deliveryorderservice.objDeliveryOrder.CYLINSTALDT = obj.CYLINSTALDT.toString()} ;
    if (obj.KEYNO != null){this.Deliveryorderservice.objDeliveryOrder.KEYNO = obj.KEYNO.toString()} ;
    if (obj.BatteryNo != null){this.Deliveryorderservice.objDeliveryOrder.BatteryNo = obj.BatteryNo.toString()} ;
    if (obj.ACNO != null){this.Deliveryorderservice.objDeliveryOrder.ACNO = obj.ACNO.toString()} ;
    //if (obj.ACNAME != null){this.Deliveryorderservice.objDeliveryOrder.ACNAME = obj.ACNAME.toString()} ;
    if (obj.AgentCode != null){this.Deliveryorderservice.objDeliveryOrder.AgentCode = obj.AgentCode.toString()} ;
    if (obj.AgentNAme != null){this.Deliveryorderservice.objDeliveryOrder.AgentNAme = obj.AgentNAme.toString()} ;
    if (obj.LocationCode != null){this.Deliveryorderservice.objDeliveryOrder.LocationCode = obj.LocationCode.toString()} ;
    if (obj.stockyn != null){this.Deliveryorderservice.objDeliveryOrder.stockyn = obj.stockyn.toString()} ;
    if (obj.HpaCode != null){this.Deliveryorderservice.objDeliveryOrder.HpaCode = obj.HpaCode.toString()} ;
    //if (obj.HPAYN != null){this.Deliveryorderservice.objDeliveryOrder.HPAYN = obj.HPAYN.toString()} ;
    if (obj.PROFILECODE != null){this.Deliveryorderservice.objDeliveryOrder.PROFILECODE = obj.PROFILECODE.toString()} ;
    if (obj.ACBAL != null){this.Deliveryorderservice.objDeliveryOrder.ACBAL = obj.ACBAL.toString()} ;
    //if (obj.CLBAL != null){this.Deliveryorderservice.objDeliveryOrder.CLBAL = obj.CLBAL.toString()} ;
    if (obj.SALEPRICE != null){this.Deliveryorderservice.objDeliveryOrder.SALEPRICE = obj.SALEPRICE.toString()} ;
    if (obj.sBasicValue != null){this.Deliveryorderservice.objDeliveryOrder.sBasicValue = obj.sBasicValue.toString()} ;
    if (obj.GSTCD != null){this.Deliveryorderservice.objDeliveryOrder.GSTCD = obj.GSTCD.toString()} ;
    if (obj.HSNCODE != null){this.Deliveryorderservice.objDeliveryOrder.HSNCODE = obj.HSNCODE.toString()} ;
    if (obj.CGST != null){this.Deliveryorderservice.objDeliveryOrder.CGST = obj.CGST.toString()} ;
    if (obj.SGST != null){this.Deliveryorderservice.objDeliveryOrder.SGST = obj.SGST.toString()} ;
    if (obj.GSTCESS != null){this.Deliveryorderservice.objDeliveryOrder.GSTCESS = obj.GSTCESS.toString()} ;
    if (obj.CGSTR != null){this.Deliveryorderservice.objDeliveryOrder.CGSTR = obj.CGSTR.toString()} ;
    if (obj.SGSTR != null){this.Deliveryorderservice.objDeliveryOrder.SGSTR = obj.SGSTR.toString()} ;
    if (obj.GSTCESSR != null){this.Deliveryorderservice.objDeliveryOrder.GSTCESSR = obj.GSTCESSR.toString()} ;
    if (obj.IGSTR != null){this.Deliveryorderservice.objDeliveryOrder.IGSTR = obj.IGSTR.toString()} ;
    if (obj.sTotinvamt != null){this.Deliveryorderservice.objDeliveryOrder.sTotinvamt = obj.sTotinvamt.toString()} ;
    if (obj.CashDiscount != null){this.Deliveryorderservice.objDeliveryOrder.CashDiscount = obj.CashDiscount.toString()} ;
    if (obj.sinsurance != null){this.Deliveryorderservice.objDeliveryOrder.sinsurance = obj.sinsurance.toString()} ;
    if (obj.sHPACharge != null){this.Deliveryorderservice.objDeliveryOrder.sHPACharge = obj.sHPACharge.toString()} ;
    if (obj.MTOKENCHG != null){this.Deliveryorderservice.objDeliveryOrder.MTOKENCHG = obj.MTOKENCHG.toString()} ;
    if (obj.SLIFETIMETAX != null){this.Deliveryorderservice.objDeliveryOrder.SLIFETIMETAX = obj.SLIFETIMETAX.toString()} ;
    if (obj.SNOPLATECHG != null){this.Deliveryorderservice.objDeliveryOrder.SNOPLATECHG = obj.SNOPLATECHG.toString()} ;
    if (obj.sCrTemp != null){this.Deliveryorderservice.objDeliveryOrder.sCrTemp = obj.sCrTemp.toString()} ;
    //if (obj.RTOR != null){this.Deliveryorderservice.objDeliveryOrder.RTOR = obj.RTOR.toString()} ;
    if (obj.srto != null){this.Deliveryorderservice.objDeliveryOrder.srto = obj.srto.toString()} ;
    if (obj.sHandlingCharge != null){this.Deliveryorderservice.objDeliveryOrder.sHandlingCharge = obj.sHandlingCharge.toString()} ;
    if (obj.HCGSTA != null){this.Deliveryorderservice.objDeliveryOrder.HCGSTA = obj.HCGSTA.toString()} ;
    if (obj.HSGSTA != null){this.Deliveryorderservice.objDeliveryOrder.HSGSTA = obj.HSGSTA.toString()} ;
    if (obj.HANDLINGGSTNET != null){this.Deliveryorderservice.objDeliveryOrder.HANDLINGGSTNET = obj.HANDLINGGSTNET.toString()} ;
    if (obj.SEXTWARANTY != null){this.Deliveryorderservice.objDeliveryOrder.SEXTWARANTY = obj.SEXTWARANTY.toString()} ;
    if (obj.sInvAmt != null){this.Deliveryorderservice.objDeliveryOrder.sInvAmt = obj.sInvAmt.toString()} ;
    if (obj.sBasicDiscount != null){this.Deliveryorderservice.objDeliveryOrder.sBasicDiscount = obj.sBasicDiscount.toString()} ;
    if (obj.sOtherCharge1 != null){this.Deliveryorderservice.objDeliveryOrder.sOtherCharge1 = obj.sOtherCharge1.toString()} ;
    if (obj.sGRANDTOTAL != null){this.Deliveryorderservice.objDeliveryOrder.sGRANDTOTAL = obj.sGRANDTOTAL.toString()} ;
    if (obj.saccessories != null){this.Deliveryorderservice.objDeliveryOrder.saccessories = obj.saccessories.toString()} ;
    if (obj.ACCESDB != null){this.Deliveryorderservice.objDeliveryOrder.ACCESDB = obj.ACCESDB.toString()} ;
    if (obj.ACEESCD != null){this.Deliveryorderservice.objDeliveryOrder.ACEESCD = obj.ACEESCD.toString()} ;
    if (obj.ACCESSINV != null){this.Deliveryorderservice.objDeliveryOrder.ACCESSINV = obj.ACCESSINV.toString()} ;
    if (obj.ACCESGSTCD != null){this.Deliveryorderservice.objDeliveryOrder.ACCESGSTCD = obj.ACCESGSTCD.toString()} ;
    if (obj.ACCESCGSTR != null){this.Deliveryorderservice.objDeliveryOrder.ACCESCGSTR = obj.ACCESCGSTR.toString()} ;
    if (obj.ACCESSGSTR != null){this.Deliveryorderservice.objDeliveryOrder.ACCESSGSTR = obj.ACCESSGSTR.toString()} ;
    if (obj.ACCESHSNNO != null){this.Deliveryorderservice.objDeliveryOrder.ACCESHSNNO = obj.ACCESHSNNO.toString()} ;
    if (obj.sMeterFlag != null){this.Deliveryorderservice.objDeliveryOrder.sMeterFlag = obj.sMeterFlag.toString()} ;
    if (obj.METERDB != null){this.Deliveryorderservice.objDeliveryOrder.METERDB = obj.METERDB.toString()} ;
    if (obj.METERCD != null){this.Deliveryorderservice.objDeliveryOrder.METERCD = obj.METERCD.toString()} ;
    if (obj.METERINV != null){this.Deliveryorderservice.objDeliveryOrder.METERINV = obj.METERINV.toString()} ;
    if (obj.METERGSTCD != null){this.Deliveryorderservice.objDeliveryOrder.METERGSTCD = obj.METERGSTCD.toString()} ;
    if (obj.METERCGSTR != null){this.Deliveryorderservice.objDeliveryOrder.METERCGSTR = obj.METERCGSTR.toString()} ;
    if (obj.METERSGSTR != null){this.Deliveryorderservice.objDeliveryOrder.METERSGSTR = obj.METERSGSTR.toString()} ;
    if (obj.METERHSNNO != null){this.Deliveryorderservice.objDeliveryOrder.METERHSNNO = obj.METERHSNNO.toString()} ;
    if (obj.ACCESMETER != null){this.Deliveryorderservice.objDeliveryOrder.ACCESMETER = obj.ACCESMETER.toString()} ;
    if (obj.bookingdiscno != null){this.Deliveryorderservice.objDeliveryOrder.bookingdiscno = obj.bookingdiscno.toString()} ;
    if (obj.NGRANDTOTAL != null){this.Deliveryorderservice.objDeliveryOrder.NGRANDTOTAL = obj.NGRANDTOTAL.toString()} ;
    
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
