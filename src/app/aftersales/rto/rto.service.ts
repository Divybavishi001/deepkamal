import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RtoService extends DataServiceService {

  constructor(public http :HttpClient) {super(http); }
  public objRto :any={
    "SINVNO" :"0",
    "CHASISNO" : "",
    "ENGINENO" : "",
    "DONO" : "0",
    "ACNO" : "0",
    "ACNAME" : "",
    "rtoappno":"",
    "AppDt":"0",
    "RTONO":"",
    "RTOregDT":"0",
    "RTOentryDT":"0",
    "RTONoreceiveDT":"0",
    "RTONODELDT":"0",
    "RTOTRNO":"",
    "RTOTRDT":"0",
    "RTOBANKREF":"",
    "Rtopaid":"0",
    "rtopaiddb":"0",
    "rtopacno":"0",
    "rtopDocNo":"",

  }
  public resetService(){
    this.objRto={
      "SINVNO" :"0",
      "CHASISNO" : "",
      "ENGINENO" : "",
      "DONO" : "0",
      "ACNO" : "0",
      "ACNAME" : "",
      "rtoappno":"",
      "AppDt":"0",
      "RTONO":"",
      "RTOregDT":"0",
      "RTOentryDT":"0",
      "RTONoreceiveDT":"0",
      "RTONODELDT":"0",
      "RTOTRNO":"",
      "RTOTRDT":"0",
      "RTOBANKREF":"",
      "Rtopaid":"0",
      "rtopaiddb":"0",
      "rtopacno":"0",
      "rtopDocNo":"",
    }
  }
  GETAfterSalesDetails(data:any): Observable<any> {
    debugger
    var param = { "SINVNO": data };
    return this.post("VehicleAfterSales/GETAfterSalesDetails", param).pipe(map(
      (res: any) => {
        debugger
        return res
      }
    ));
  }
  public insertAfterSales(data:any): Observable<any> {
    debugger
    return this.post("VehicleAfterSales/insertAfterSales", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
