import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneoussalesService extends DataServiceService {

  constructor(public http:HttpClient) {super(http); }
  public objMisSales : any ={
      "DOCNO" : "",
      "BRANCHCD" : "0",
      "docdt" : "",
      "dbcode" : "0",
      // "DBNAME" : "",
      "InvNo" : "0",
      "INVDATE" : "",
      "ACNO" : "0",
      // "ACNAME" : "",
      "AddCode" : "0",
      "CASHPARTY" : "",
      "LocCode" : "0",
      "LocName" : "",
      "vehinv" : "0",
      "VEHSALITEMNo" : "",
      "RCHGYN" : "",
      "total1" : "0",
      "CGSTTOT" : "0",
      "SGSTTOT" : "0",
      "IGSTTOT" : "0",
      "GSTCESSTOT" : "0",
      "GSTCESS" : "0",
      "GSTTOT" : "0",
      "TOTROUNDOFF" : "0",
      "GROSSAMT":"0",
      "OTHERCHARGE" : "0",
      // "entdate" : "",
      "DBTYPE" : "",
      "OtherChargeText" : "0",
      "DISCOUNT" : "0",
      "GRANDTOTAL" : "0",
      "TAXNAME" : "",
      "vertualBranch" : "0",
      // "MiscSalesAc" : "0",
      // "JVDocNo" : "",
      // "ItemMCode" : "0",
      // "Product" : "",
      // "HSNNO" : "0",
      // "gstcd" : "0",
      // "cgstr" : "0",
      // "sgstr" : "0",
      // "igstr" : "0",
      // "gstcessR" : "0",
      // "QTY" : "0",
      // "RATE" : "0",
      // "FRATE" : "0",
      // "CGSTAMT" : "0",
      // "SGSTAMT" : "0",
      // "IGSTAMT" : "0",
      // "GSTCESSAMT" : "0",
      // "roundoff" : "0",
      // "AMOUNT" : "0",
      "REMARKS" : "",
      "userid": ""
      


  }
  public resetService(){
    this.objMisSales={
      "DOCNO" : "",
      "BRANCHCD" : "0",
      "docdt" : "",
      "dbcode" : "0",
      "InvNo" : "0",
      "INVDATE" : "",
      "ACNO" : "0",
      // "ACNAME" : "",
      "AddCode" : "0",
      "CASHPARTY" : "",
      "LocCode" : "0",
      "LocName" : "",
      "vehinv" : "0",
      "VEHSALITEMNo" : "",
      "RCHGYN" : "",
      "total1" : "0",
      "CGSTTOT" : "0",
      "SGSTTOT" : "0",
      "IGSTTOT" : "0",
      "GSTCESSTOT" : "0",
      // "GSTCESS" : "0",
      "GSTTOT" : "0",
      "TOTROUNDOFF" : "0",
      "GROSSAMT" : "0",
      "OTHERCHARGE" : "0",
      "OtherChargeText" : "0",
      "DISCOUNT" : "0",
      "GRANDTOTAL" : "0",
      "TAXNAME" : "",
      // "entdate" : "",
      "DBTYPE" : "",
      "vertualBranch" : "0",
      // "MiscSalesAc" : "0",
      // "JVDocNo" : "",
      // "ItemMCode" : "0",
      // "Product" : "",
      // "HSNNO" : "0",
      // "gstcd" : "0",
      // "cgstr" : "0",
      // "sgstr" : "0",
      // "igstr" : "0",
      // "gstcessR" : "0",
      // "QTY" : "0",
      // "RATE" : "0",
      // "FRATE" : "0",
      // "CGSTAMT" : "0",
      // "SGSTAMT" : "0",
      // "IGSTAMT" : "0",
      // "GSTCESSAMT" : "0",
      // "roundoff" : "0",
      // "AMOUNT" : "0",
      "REMARKS" : "",
      "userid": ""
    }
  }
  GETMiscSales(data:any): Observable<any> {
    debugger
    var param = { "DOCNO": data };
    return this.post("MiscellaneousSales/GETMiscSales", param).pipe(map(
      (res: any) => {
        debugger
        return res
      }
    ));
  }

  
  public insertMiscSales(data:any): Observable<any> {
    debugger
    return this.post("MiscellaneousSales/insertMiscSales", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
