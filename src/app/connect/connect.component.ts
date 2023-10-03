import { Component, OnInit, OnDestroy , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from './connect.service';
import { LoginService } from '../Login/login.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  encapsulation: ViewEncapsulation.None, // Disable view encapsulation
})
export class ConnectComponent implements OnInit, OnDestroy{

  constructor(public connectService: ConnectService,
    public loginService: LoginService
    ,
    private NavbarService: NavbarService, private router: Router) { }
  public companyList: any = [];
  public yearList: any = [];
  ngOnInit(): void {
    this.getConnectData();
    this.loginService.resetData();
    this.NavbarService.hide();
  }
  ngOnDestroy(): void {
    this.NavbarService.display();
  }
  public getConnectData() {
    debugger;
    this.connectService.getConnectData().subscribe(
      data => {
        ;
        if (data != null && data["Table"][0] != undefined) {
          console.log(data["Table"]);
          this.companyList = data["Table"];
          debugger;
          this.connectService.connectData.companyName = this.companyList[0].companyName;
          this.connectService.connectData.branchCode = this.loginService.dbConfing.zBranchCode;
          this.connectService.getYear().subscribe(
            data => {
              this.yearList = data["Table"];
              this.connectService.connectData.year = this.yearList[0].FinYear;
            });

          this.getBranchDetails();
        }
        //this.loaderService.hide();
      });
  }
  public getBranchDetails() {
    debugger;
    this.connectService.getBranchDetails().subscribe(
      data => {
        debugger
        if (data != null && data["Table"][0] != undefined) {
          this.connectService.connectData.branchName = data["Table"][0].Branchname;
        }
        else {
          this.connectService.connectData.branchName = "";
          alert("WRONG BRANCH SELECTED?");

        }
      });
  }
  public saveConnect() {

    if(this.connectService.connectData.companyName == "")
    {
      alert("Please select Company.");
      return;
    }
    if (this.connectService.connectData.year == "") {
      alert("Please select Year.");
      return;
    }
    if (this.connectService.connectData.branchCode == "") {
      alert("Please enter valid branch Code.");
      return;
    }
    if (this.connectService.connectData.branchName == "") {
      alert("Please eter valid branch Code.");
      return;
    }
    this.connectService.saveConnectDetails().subscribe(
      data => {
        debugger
        if (data != null && data["Table"][0] != undefined) {
          this.loginService.dbConfing.zBranchID = data["Table"][0].branchID;
          this.loginService.dbConfing.zBranchCode = data["Table"][0].BRANCHCODE;
          this.loginService.dbConfing.branchcdz = data["Table"][0].BRANCHCODE;
        }
        if (data != null && data["Table1"][0] != undefined) {
          this.loginService.dbConfing.ZAUDITF = data["Table1"][0].ZAUDITF;
          this.loginService.dbConfing.ZACNODOCNO = data["Table1"][0].ZACNODOCNO;
          this.loginService.dbConfing.ZCOMPCODE = data["Table1"][0].ZCOMPCODE;
          this.loginService.dbConfing.CompanyName = data["Table1"][0].CompanyName;
          this.loginService.dbConfing.CompanyNamecorp = data["Table1"][0].CompanyNamecorp;
          this.loginService.dbConfing.ZPREFIX = data["Table1"][0].ZPREFIX;
          this.loginService.dbConfing.zPrYrDbname = data["Table1"][0].zPrYrDbname;

          this.loginService.dbConfing.zNextDbName = data["Table1"][0].zNextDbName;

          this.loginService.dbConfing.ZGSTIN = data["Table1"][0].ZGSTIN;
          this.loginService.dbConfing.zKITAPPROVAL = data["Table1"][0].zKITAPPROVAL;
          this.loginService.dbConfing.Zsprdbname = data["Table1"][0].Zsprdbname;
          this.loginService.dbConfing.zIntegratedAC = data["Table1"][0].zIntegratedAC;
          this.loginService.dbConfing.zIntegratedWS = data["Table1"][0].zIntegratedWS;
          this.loginService.dbConfing.Zlastacno = data["Table1"][0].Zlastacno;
          this.loginService.dbConfing.zSalesMenu = data["Table1"][0].zSalesMenu;
          this.loginService.dbConfing.zSalesMenu1 = data["Table1"][0].zSalesMenu1;
          this.loginService.dbConfing.zStTinNo = data["Table1"][0].zStTinNo;
          this.loginService.dbConfing.zCstTinNo = data["Table1"][0].zCstTinNo;
          this.loginService.dbConfing.zStTinNo1 = data["Table1"][0].zStTinNo1;
          this.loginService.dbConfing.zCstTinNo1 = data["Table1"][0].zCstTinNo1;
          this.loginService.dbConfing.zProposal = data["Table1"][0].zProposal;
          this.loginService.dbConfing.ZVATINCLUDE = data["Table1"][0].ZVATINCLUDE;
          this.loginService.dbConfing.zvattaxbillinclude = data["Table1"][0].zvattaxbillinclude;
          this.loginService.dbConfing.zBroker = data["Table1"][0].zBroker;
          this.loginService.dbConfing.zBackUPPath = data["Table1"][0].zBackUPPath;
          this.loginService.dbConfing.zRestorePath = data["Table1"][0].zRestorePath;
          this.loginService.dbConfing.ZBillACBAL = data["Table1"][0].ZBillACBAL;
          this.loginService.dbConfing.ZTRANSOPBAL = data["Table1"][0].ZTRANSOPBAL;
          this.loginService.dbConfing.ZAUDIT = data["Table1"][0].ZAUDIT;
          this.loginService.dbConfing.zSTARTACNO = data["Table1"][0].zSTARTACNO;
          this.loginService.dbConfing.veHDELDAYZ = data["Table1"][0].veHDELDAYZ;
          this.loginService.dbConfing.FDTYR = data["Table1"][0].FDTYR;
          this.loginService.dbConfing.TDTYR = data["Table1"][0].TDTYR;
          this.loginService.dbConfing.LOCKDATA = data["Table1"][0].LOCKDATA;
          this.loginService.dbConfing.FinYear = data["Table1"][0].FinYear;
          this.loginService.dbConfing.Prefix = data["Table1"][0].Prefix;
          this.loginService.dbConfing.zLastDbcode = data["Table1"][0].zLastDbcode;
          this.loginService.dbConfing.zOpBalLock = data["Table1"][0].zOpBalLock;
          this.loginService.dbConfing.zNewYearStart = data["Table1"][0].zNewYearStart;
          this.loginService.dbConfing.zThisYearClosed = data["Table1"][0].zThisYearClosed;
          this.loginService.dbConfing.companyadd = data["Table1"][0].companyadd;


        }
        if (data != null && data["Table2"][0] != undefined) {
          this.loginService.dbConfing.PRFDTYR = data["Table2"][0].PRFDTYR;
          this.loginService.dbConfing.PRTDTYR = data["Table2"][0].PRTDTYR;
        }
        if (data != null && data["Table3"][0] != undefined) {
          this.loginService.dbConfing.NXTFDTYR = data["Table3"][0].NXTFDTYR;
          this.loginService.dbConfing.NXTTDTYR = data["Table3"][0].NXTTDTYR;
        }
        console.log(data);
        this.router.navigate(['/Mainmenu'], { skipLocationChange: true });
      });
      
  }
}
