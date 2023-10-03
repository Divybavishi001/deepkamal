import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(public http: HttpClient) { }

  post(url: string, data:any ): Observable<any> {

    let URL = environment.apiURL + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.post(URL, data).pipe(map(
      (res: any) => {
        //const data = res;
        //return data;
        return res
      }
    ));
    
    //.catch(this.handleError.bind(this));
  }

  get(url: string, data:string): Observable<any> {

    let URL = environment.displayDocumentURL;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'path':data
      }),
      withCredentials: true
    };
    return this.http.get(URL, httpOptions);

    //.catch(this.handleError.bind(this));
  }
}

