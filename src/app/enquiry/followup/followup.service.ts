import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataServiceService } from 'src/app/Data/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class FollowupService extends DataServiceService{

  constructor(http : HttpClient) { super(http); }
  public objFollowup : any ={
    "EnquiryNo" : "0",
    "ENQUIRYDT" : "0",
    "VisitorName" : "",
    "vehcode" : "",
    "Mobile" : "",
  }
  public resetService(){
    this.objFollowup ={
      "EnquiryNo" : "0",
      "ENQUIRYDT" : "0",
      "VisitorName" : "",
      "vehcode" : "",
      "Mobile" : "",
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
