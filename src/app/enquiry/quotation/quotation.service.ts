import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataServiceService } from 'src/app/Data/data-service.service';


@Injectable({
  providedIn: 'root'
})
export class QuotationService extends DataServiceService {

  constructor(public http :HttpClient) {super(http); }
  public objQuotation :any={
    "EnquiryNo" : "0",
    "ENQUIRYDT" : "0",
    "VisitorName" : "",
    "branch" : "0",
    "Mobile" : "",
    "sBASICVALUE" : "0",
    "sGRANDTOTAL" : "0",
    "QuotDt" : "0",
    "vehcode" : ""

  }
  public resetService(){
    this.objQuotation = {
      "EnquiryNo" : "0",
      "ENQUIRYDT" : "0",
      "VisitorName" : "",
      "branch" : "0",
      "Mobile" : "",
      "sBASICVALUE" : "0",
      "sGRANDTOTAL" : "0",
      "QuotDt" : "0",
      "vehcode" : ""
    }
  }
  getEnquiry(data:any): Observable<any> {
    debugger
    var param = { "EnquiryNo": data };
    return this.post("Enquiry/getEnquiry", param).pipe(map(
      (res: any) => {
        debugger
        return res
      }
    ));
  }
  public insertEnquiry(data:any): Observable<any> {
    debugger
    return this.post("Enquiry/insertEnquiry", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
