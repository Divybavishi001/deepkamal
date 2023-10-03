import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from '../Data/data-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatbooktypeService extends DataServiceService {

  constructor(public http: HttpClient) { super(http); }
  public objBooktype: any = {
    "dbtype": "",
    "dbname": "",
    "active": ""
  };
  public resetService() {
    this.objBooktype = {
      "dbtype": "",
      "dbname": "",
      "active": ""
    };
  }
  getBooktype(): Observable<any> {
    debugger
    return this.post("DayBookType/getDayBookType", "").pipe(map(
      (res: any) => {
        return res
      }
    ));
  }
  
  public insertBooktype(data:any): Observable<any> {
    debugger
    return this.post("DayBookType/insertBooktype", data).pipe(map(
      (res: any) => {
        return res;
      }
    ));
  }
}
