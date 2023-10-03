import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LedgeraccountService extends DataServiceService {

  constructor(public http:HttpClient) { super(http); }
  public objledgeraccount :any ={
    "ACNO" : "0",
    "ACNAME" : "",
    "GRP" : "0",
    "SGRP" : "0",
    "SSGRP" : "0",
    "SSSGRP" : "0",
    "OPBAL" : "0",
    "crdays" : "0",
    "DBCODE" : "0",
    "TYPE" : "",
    "GSTTIN" : "0",
    "selectacgrp" : "0",
    "FLAGNO" : "0",
    "selectacno" : "0",
    "TDSLIMIT" : "0",
    "TDSRATE" : "0",
    "TDSCODE" : "0",
    "HSNNO" : "",
    "GSTCD" : "0",
    "RCMCD" : "",
    "EPAYbENIid" : "",
    "EpayIFSC" : "",
    "EpayAC" : "",
    "MULTIBOOKING" : "",
    "MergeWith" : "0",
    "BranchCode" : "0",
    "TDSYN" : "",
    "AgentEnqNo" : "0",
    "FirstName" : "",
    "MiddleName" : "",
    "LastName" : "",
    "CloseAccountYN" : "",
    "GRP_FOUR" : "0",
    "SGRP_FOUR" : "0",
    "SSGRP_FOUR" : "0",
    "SSSGRP_FOUR" : "0",
    "active" : "0",
    "USERNAME" : "",
    "ENTDATE" : "",
    "add1" : "",
    "add2" : "",
    "add3" : "",
    "area" : "",
    "AREACD" : "0",
    "city" : "",
    "pin" : "0",
    "state" : "",
    "STATECD" : "0",
    "pho1" : "",
    "phr1" : "",
    "phr2" : "",
    "fax" : "",
    "mobile" : "",
    "email" : "",
    "PANCARD" : "",
    "adHarno" : "",
    "F6061" : "",
    "Acknoledgeno" : ""

    
  }
  public resetService() {
    this.objledgeraccount = {
      "ACNO" : "0",
      "ACNAME" : "",
      "GRP" : "0",
      "SGRP" : "0",
      "SSGRP" : "0",
      "SSSGRP" : "0",
      "OPBAL" : "0",
      "crdays" : "0",
      "DBCODE" : "0",
      "TYPE" : "",
      "GSTTIN" : "0",
      "selectacgrp" : "0",
      "FLAGNO" : "0",
      "selectacno" : "0",
      "TDSLIMIT" : "0",
      "TDSRATE" : "0",
      "TDSCODE" : "0",
      "HSNNO" : "",
      "GSTCD" : "0",
      "RCMCD" : "",
      "EPAYbENIid" : "",
      "EpayIFSC" : "",
      "EpayAC" : "",
      "MULTIBOOKING" : "",
      "MergeWith" : "0",
      "BranchCode" : "0",
      "TDSYN" : "",
      "AgentEnqNo" : "0",
      "FirstName" : "",
      "MiddleName" : "",
      "LastName" : "",
      "CloseAccountYN" : "",
      "GRP_FOUR" : "0",
      "SGRP_FOUR" : "0",
      "SSGRP_FOUR" : "0",
      "SSSGRP_FOUR" : "0",
      "active" : "0",
      "USERNAME" : "",
      "ENTDATE" : "",
      "add1" : "",
      "add2" : "",
      "add3" : "",
      "area" : "",
      "AREACD" : "0",
      "city" : "",
      "pin" : "0",
      "state" : "",
      "STATECD" : "0",
      "pho1" : "",
      "phr1" : "",
      "phr2" : "",
      "fax" : "",
      "mobile" : "",
      "email" : "",
      "PANCARD" : "",
      "adHarno" : "",
      "F6061" : "",
      "Acknoledgeno" : ""
    };
  }
  getLeadgerAccount(data:any): Observable<any> {
    debugger
    var param = { "ACNO": data };
    return this.post("LeadgerAccount/getLeadgerAccount", param).pipe(map(
      (res: any) => {
        debugger
        return res
      }
    ));
  }

  
  public insertAccount(data:any): Observable<any> {
    debugger
    return this.post("LeadgerAccount/insertAccount", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
