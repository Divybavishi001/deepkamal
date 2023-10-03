import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends DataServiceService {
  //public rowData = [];
  constructor(public http: HttpClient) {
    debugger;
    super(http);
  }
  public dbConfing = {
    "ACWS": "",
    "ServerName": "",
    "DbName": "",
    "DatabaseName": "",
    "UserName": "",
    "CAdd1": "",
    "CAdd2": "",
    "CAdd3": "",
    "CCity": "",
    "CPhone": "",
    "fbranch": "",
    "ZPARTYN": "",
    "ZLABOURYN": "",
    "zPassword": "",
    "zBranchCode": "",
    "UserType": "",
    "WindowState": "",
    "version": "",

    "zBranchID":"",
    "branchcdz":"",

    "ZAUDITF":"",
    "ZACNODOCNO":"",
    "ZCOMPCODE":"",
    "CompanyName":"",
    "CompanyNamecorp":"",
    "ZPREFIX":"",
    "zPrYrDbname":"",
    "PRFDTYR":"",
    "PRTDTYR":"",
    "zNextDbName":"",
    "NXTFDTYR":"",
    "NXTTDTYR":"",
    "ZGSTIN":"",
    "zKITAPPROVAL":"",
    "Zsprdbname":"",
    "zIntegratedAC":"",
    "zIntegratedWS":"",
    "Zlastacno":"",
    "zSalesMenu":"",
    "zSalesMenu1":"",
    "zStTinNo":"",
    "zCstTinNo":"",
    "zStTinNo1":"",
    "zCstTinNo1":"",
    "zProposal":"",
    "ZVATINCLUDE":"",
    "zvattaxbillinclude":"",
    "zBroker":"",
    "zBackUPPath":"",
    "zRestorePath":"",
    "ZBillACBAL":"",
    "ZTRANSOPBAL":"",
    "ZAUDIT":"",
    "zSTARTACNO":"",
    "veHDELDAYZ":"",
    "FDTYR":"",
    "TDTYR":"",
    "LOCKDATA":"",
    "FinYear":"",
    "Prefix":"",
    "zLastDbcode":"",
    "zOpBalLock":"",
    "zNewYearStart":"",
    "zThisYearClosed":"",
    "companyadd":"",

    "gAgentYN": "",
    "gAgentCode": "",


  };
  public loginIn(param:any) {
    debugger;
    return this.post("LoginController/LogIn", param).pipe(map(
      (res: any) => {
        return res
      }
    ));
  }
  public resetData(){
    debugger;
    this.dbConfing = {
      "ACWS": "",
      "ServerName": "",
      "DbName": "",
      "DatabaseName": "",
      "UserName": "",
      "CAdd1": "",
      "CAdd2": "",
      "CAdd3": "",
      "CCity": "",
      "CPhone": "",
      "fbranch": "",
      "ZPARTYN": "",
      "ZLABOURYN": "",
      "zPassword": "",
      "zBranchCode": "",
      "UserType": "",
      "WindowState": "",
      "version":"",
      "zBranchID": "",
      "branchcdz": "",

      "ZAUDITF": "",
      "ZACNODOCNO": "",
      "ZCOMPCODE": "",
      "CompanyName": "",
      "CompanyNamecorp": "",
      "ZPREFIX": "",
      "zPrYrDbname": "",
      "PRFDTYR": "",
      "PRTDTYR": "",
      "zNextDbName": "",
      "NXTFDTYR": "",
      "NXTTDTYR": "",
      "ZGSTIN": "",
      "zKITAPPROVAL": "",
      "Zsprdbname": "",
      "zIntegratedAC": "",
      "zIntegratedWS": "",
      "Zlastacno": "",
      "zSalesMenu": "",
      "zSalesMenu1": "",
      "zStTinNo": "",
      "zCstTinNo": "",
      "zStTinNo1": "",
      "zCstTinNo1": "",
      "zProposal": "",
      "ZVATINCLUDE": "",
      "zvattaxbillinclude": "",
      "zBroker": "",
      "zBackUPPath": "",
      "zRestorePath": "",
      "ZBillACBAL": "",
      "ZTRANSOPBAL": "",
      "ZAUDIT": "",
      "zSTARTACNO": "",
      "veHDELDAYZ": "",
      "FDTYR": "",
      "TDTYR": "",
      "LOCKDATA": "",
      "FinYear": "",
      "Prefix": "",
      "zLastDbcode": "",
      "zOpBalLock": "",
      "zNewYearStart": "",
      "zThisYearClosed": "",
      "companyadd": "",

      "gAgentYN":"",
      "gAgentCode":"",
    };
  }
}

