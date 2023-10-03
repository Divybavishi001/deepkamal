import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingreceiptService extends DataServiceService{

  constructor(public http:HttpClient) { super(http);}
  public Objbookingreceipt : any={
    "DBCODE" : "0",
    "AcNo" : "0",
    "ACNAME" : "",
    "DOCNO" : "",
    "DOCDT" : "0",
    "Amount" : "0",
    "NAR1" : "",
    "NAR2" : "",
    "NAR3" : "",
    "NAR4" : "",
    "NAR5" : "",
    "PslpNo" : "",
    "PSLPDT": "0",
    "ClearYN": "",
    "ClearingDt": "0",
    "BillYN": "",
    "finreimburse": "",
    "ChqName": "",
    "smcode": "0",
    "SMname": "",
    "AgentCode": "0",
    "AgentNAme": "",
    "VehicleCode" : "",
    "ItemName" : "",
    "LocationCode" : "0",
    "LocationName" : "",
    "BranchCode" : "0",
    "Branchname" : "",
    "hpacode" : "0",
    "WITHACCES" : "",
    "WITHMETER" : "",
    "BankBranch" : "",
    "PROFILECODE" : "0",
    "BranchCD" : "0",
    "AgentEnqNo" : "0",
    "vertualBranch" : "0",

  }
  public resetService(){
    this.Objbookingreceipt={
        "DBCODE" : "0",
        "AcNo" : "0",
        "ACNAME" : "",
        "DOCNO" : "",
        "DOCDT" : "0",
        "Amount" : "0",
        "NAR1" : "",
        "NAR2" : "",
        "NAR3" : "",
        "NAR4" : "",
        "NAR5" : "",
        "PslpNo" : "",
        "PSLPDT": "0",
        "ClearYN": "",
        "ClearingDt": "0",
        "BillYN": "",
        "finreimburse": "",
        "ChqName": "",
        "smcode": "0",
        "SMname": "",
        "AgentCode": "0",
        "AgentNAme": "",
        "VehicleCode" : "",
        "ItemName" : "",
        "LocationCode" : "0",
        "LocationName" : "",
        "BranchCode" : "0",
        "Branchname" : "",
        "hpacode" : "0",
        "WITHACCES" : "",
        "WITHMETER" : "",
        "BankBranch" : "",
        "PROFILECODE" : "0",
        "BranchCD" : "0",
        "AgentEnqNo" : "0",
        "vertualBranch" : "0",
    }
  }
  GETTransaction(data:any): Observable<any> {
    debugger
    var param = { "DOCNO": data };
    return this.post("BankReceipts/GETTransaction", param).pipe(map(
      (res: any) => {
        debugger
        return res
      }
    ));
  }

  
  public insertTransaction(data:any): Observable<any> {
    debugger
    return this.post("BankReceipts/insertTransaction", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
