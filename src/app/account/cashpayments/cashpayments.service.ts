import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashpaymentsService extends DataServiceService{

  constructor(public http:HttpClient) {super(http); }
  public objCashPayments :any={
      "AcNo" : "0",
      "ACNAME" : "",
      "DOCNO" : "",
      "DOCDT" : "0",
      "Amount" : "0",
      "VehicleCode" : "",
      "ItemName" : "",
      "GSTCD" : "",
  }
  public resetService(){
    this.objCashPayments={
      "AcNo" : "0",
      "ACNAME" : "",
      "DOCNO" : "",
      "DOCDT" : "0",
      "Amount" : "0",
      "VehicleCode" : "",
      "ItemName" : "",
      "GSTCD" : "",
    }
  }
  GETTransaction(data:any): Observable<any> {
    debugger
    var param = { "DOCNO": data };
    return this.post("CashPayment/GETTransaction", param).pipe(map(
      (res: any) => {
        debugger
        return res
      }
    ));
  }
  public insertTransaction(data:any): Observable<any> {
    debugger
    return this.post("CashReceipts/insertTransaction", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
