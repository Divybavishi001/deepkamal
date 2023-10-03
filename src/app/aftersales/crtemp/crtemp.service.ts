import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrtempService extends DataServiceService{

  constructor(public http : HttpClient) {super(http); }
  public objCrtemp :any={
    "SINVNO" :"0",
    "CHASISNO" : "",
    "ENGINENO" : "",
    "DONO" : "0",
    "ACNO" : "0",
    "ACNAME" : "",
    "CrTempNo" : "",
    "CrTempDt" : "0",
    "CrTempDist" : "",
    "CrTempdb" : "0",
    "CrTempac" : "",
    "CrTempRefNo" : "",
    "CrTempDocNo" : "",
    

  }
public resetService(){
  this.objCrtemp ={
    "SINVNO" :"0",
    "CHASISNO" : "",
    "ENGINENO" : "",
    "DONO" : "0",
    "ACNO" : "0",
    "ACNAME" : "",
    "CrTempNo" : "",
    "CrTempDt" : "0",
    "CrTempDist" : "",
    "CrTempdb" : "0",
    "CrTempac" : "",
    "CrTempRefNo" : "",
    "CrTempDocNo" : "",
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
