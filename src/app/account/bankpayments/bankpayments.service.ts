import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankpaymentsService extends DataServiceService{

  constructor(public http:HttpClient) {super(http); }
  public objBankPayment:any={
    "AcNo":"0",
    "ACNAME":"",
    "DOCNO":"",
    "DOCDT":"0",
    "Amount":"0",
    "PslpNo":"",
    "PSLPDT":"0",
    "ClearYN":"",
    "ClearingDt":"0",
    "GSTCD":"0",
    "VehicleCode":"",
    "ItemName":"",
  }
  public resetService(){
    this.objBankPayment={
      "AcNo":"0",
      "ACNAME":"",
      "DOCNO":"",
      "DOCDT":"0",
      "Amount":"0",
      "PslpNo":"",
      "PSLPDT":"0",
      "ClearYN":"",
      "ClearingDt":"0",
      "GSTCD":"0",
      "VehicleCode":"",
      "ItemName":"",
    }
  }
  GETTransaction(data:any): Observable<any> {
    debugger
    var param = { "DOCNO": data };
    return this.post("CashReceipts/GETTransaction", param).pipe(map(
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
