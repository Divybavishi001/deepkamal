import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllotmentService extends DataServiceService{

  constructor(public http :HttpClient) { super(http); }
  public objAllotment :any={
    "ACNO" : "0",
    "ACNAME" : "",
    "DONo" : "0",
    "DoDate" : "0",
    "VehicleCode" : "",
    "ItemName" : "",
    "ChasisNo" : "",
    "EngineNo" : "",
    "AllotDt" : "0",
    "TANKNO" : "",
    "gaskitno" : "",
    "KEYNO" : "",
    "WITHACCES" : "",
    "withaccessyn" : "0",
    "WITHMETER" : "",
    "withmeteryn" : "0",
  }
  public resetService(){
    this.objAllotment = {
      "ACNO" : "0",
      "ACNAME" : "",
      "DONo" : "0",
      "DoDate" : "0",
      "VehicleCode" : "",
      "ItemName" : "",
      "ChasisNo" : "",
      "EngineNo" : "",
      "AllotDt" : "0",
      "TANKNO" : "",
      "gaskitno" : "",
      "KEYNO" : "",
      "WITHACCES" : "",
      "withaccessyn" : "0",
      "WITHMETER" : "",
      "withmeteryn" : "0",
    }
  }
  getdo(data:any): Observable<any> {
    debugger
    var param = { "DONo": data };
    return this.post("Do/getdo", param).pipe(map(
      (res: any) => {
        debugger
        return res
      }
    ));
  }

  
  public insertDo(data:any): Observable<any> {
    debugger
    return this.post("Do/insertDo", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
