import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from 'src/app/Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalService extends DataServiceService{

  constructor(public http:HttpClient) {super(http); }
  public objRto :any={
   "DocNo" : "",
   "DBCODE" : "0",
   "DBNAME" : "",
   "Docdt" : "0",
   "BRANCHID" : "0",
   "BRANCHCD" : "0",
   "vertualBranch" : "0",
   "acno" : "0",
   "amount" : "0",
   "Nar1" : "",
   "Nar2" : "",
   "Nar3" : "",
   "Nar4" : "",
   "DocDt" : "0",


  }
  public resetService(){
    this.objRto={
      "DocNo" : "",
      "DBCODE" : "0",
      "DBNAME" : "",
      "Docdt" : "0",
      "BRANCHID" : "0",
      "BRANCHCD" : "0",
      "vertualBranch" : "0",
      "acno" : "0",
      "amount" : "0",
      "Nar1" : "",
      "Nar2" : "",
      "Nar3" : "",
      "Nar4" : "",
      "DocDt" : "0",
    }
  }
  getJournalTransaction(data:any): Observable<any> {
    debugger
    var param = { "DBCODE": data };
    return this.post("JournalTransaction/getJournalTransaction", param).pipe(map(
      (res: any) => {
        debugger
        return res;
      }
    ));
  }
  
  public insertJournalTransaction(data:any): Observable<any> {
    debugger
    return this.post("JournalTransaction/insertJournalTransaction", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }


}
