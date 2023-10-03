import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectService extends DataServiceService{

  constructor(public http: HttpClient,
    public loginService: LoginService) {
    super(http);
  }
  public connectData = {
    "companyName": "",
    "year": "",
    "branchCode": "",
    "branchName": "",
    "branchId": "",
    "currentDate": ""
  }
  getConnectData(): Observable<any> {
    debugger;
    return this.post("Common/getConnectData", "").pipe(map(
      (res: any) => {
        return res
      }
    ));
  }
  getYear(): Observable<any> {
    debugger;
    let param = { "companyName": this.connectData.companyName }
    return this.post("Common/getYear", param).pipe(map(
      (res: any) => {
        return res
      }
    ));
  }
  getBranchDetails(): Observable<any> {
    debugger;
    let param = { "branchCode": this.connectData.branchCode }
    return this.post("Common/getBranchDetails", param).pipe(map(
      (res: any) => {
        return res
      }
    ));
  }
  saveConnectDetails(): Observable<any> {
    let param = {
      "branchCode": this.connectData.branchCode,
      "version": this.loginService.dbConfing.version,
      "companyName": this.connectData.companyName,
      "finYear": this.connectData.year
    }
    return this.post("Common/saveConnectDetails", param).pipe(map(
      (res: any) => {
        return res
      }
    ));
  }
}
