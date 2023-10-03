import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService extends DataServiceService{

  constructor(public http :HttpClient) {super(http); }
  public objInsurance :any={
    "SINVNO" :"0",
    "CHASISNO" : "",
    "ENGINENO" : "",
    "DONO" : "0",
    "ACNO" : "0",
    "ACNAME" : "",
    "inscocode" : "0",
    "inscoverno" : "0",
    "InsPolicyNo" : "",
    "InsPAID" : "0",
    "inspaidchno" : "",
    "insdt" : "0",
    "inspaidchdt" : "0",
    "insuracno" : "0",
    "acjvno" : "",

  }
public resetService(){
  this.objInsurance ={
    "SINVNO" :"0",
    "CHASISNO" : "",
    "ENGINENO" : "",
    "DONO" : "0",
    "ACNO" : "0",
    "ACNAME" : "",
    "inscocode" : "0",
    "inscoverno" : "0",
    "InsPolicyNo" : "",
    "InsPAID" : "0",
    "inspaidchno" : "",
    "insdt" : "0",
    "inspaidchdt" : "0",
    "insuracno" : "0",
    "acjvno" : "",
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
