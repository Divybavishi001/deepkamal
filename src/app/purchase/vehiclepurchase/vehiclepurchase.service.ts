// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { DataServiceService } from 'src/app/Data/data-service.service';

// @Injectable({
//   providedIn: 'root'
// })

// export class VehiclepurchaseService extends DataServiceService{
//   public objVehiclePurchase: any = {
//     "dbCode": "",
//     "dbName": "",
//     "receivedDate": "",
//     "documentNo": "",
//     "documentDate": "",
//     "truckNo": "",
//     "invoceNo": "",
//     "invoiceDate": "",
//     "purchaseBranch": "",
//     "transporterNo": "",
//     "transporterName": "",
//     "taxCode": "",
//     "taxName": "",
//     "acCode": "",
//     "acName": "",
//     "fDate": "",
//     "rd": "",
//     "transit": "",
//     "plant": "",
//     "stForm": "",
//     "uploadByParty": "",
//     "uploadByPartyYN": "",
//     "lotNo": 0,
//     "netAmount": 0,
//     "cgstAmount": 0,
//     "sgstAmount": 0,
//     "igstAmount": 0,
//     "gstCessAmount": 0,
//     "totalGSTAmount": 0,
//     "totalGridAmount": 0,
//     "remark": "",
//     "otherCharge": 0,
//     "discount": 0,
//     "grantTotal": 0

//   };
//   public objPurchaseDetail = {
//     "vCode": "",
//     "vehicleName": "",
//     "qty": 0,
//     "rate": 0,
//     "netAmt": 0,
//     "gstcd": "",
//     "cgstr": "",
//     "sgstr": "",
//     "igstr": "",
//     "gstcessr": "",
//     "cgstAmt": "",
//     "sgstAmt": "",
//     "igstAmt": "",
//     "gcessAmt": "",
//     "totGST": "",
//     "totAmt": "",
//     "lotNo": ""
//   };
//   public objVehicleDetail = {
//     "psRnO": "",
//     "doNo": 0,
//     "pdate": "",
//     "pBranch": 0,
//     "itemCode": "",
//     "prodCode": "",
//     "hsnCode": "",
//     "taxCode": "",
//     "chasisNo": "",
//     "shortChasis": "",
//     "engineNo": "",
//     "color": "",
//     "mafgDate": "",
//     "location": "",
//     "lotNo": "",
//     "entTime": "",
//     "entDate": "",
//     "tankNo":"",
//     "sinvNo": "",
//     "batteryNo":"",
//     "kitNo":"",
//     "docNo":"",
//     "transit": ""
//   };
//   GETAfterSalesDetails: any;
//   insertTransaction: any;
//   GetVehiclePurchaseDetails: any;
//   public resetServiceData(){
//     this.objVehiclePurchase = {
//       "dbCode": "",
//       "dbName": "",
//       "receivedDate": "",
//       "documentNo": "",
//       "documentDate": "",
//       "truckNo": "",
//       "invoceNo": "",
//       "invoiceDate": "",
//       "purchaseBranch": "",
//       "transporterNo": "",
//       "transporterName": "",
//       "taxCode": "",
//       "taxName": "",
//       "acCode": "",
//       "acName": "",
//       "fDate": "",
//       "rd": "",
//       "transit": "",
//       "plant": "",
//       "stForm": "",
//       "uploadByParty": "",
//       "uploadByPartyYN": "",
//       "lotNo": 0,
//       "netAmount": 0,
//       "cgstAmount": 0,
//       "sgstAmount": 0,
//       "igstAmount": 0,
//       "gstCessAmount": 0,
//       "totalGSTAmount": 0,
//       "totalGridAmount": 0,
//       "remark": "",
//       "otherCharge": 0,
//       "discount": 0,
//       "grantTotal": 0

//     };
//     this.objVehicleDetail = {
//       "psRnO": "",
//       "doNo": 0,
//       "pdate": "",
//       "pBranch": 0,
//       "itemCode": "",
//       "prodCode": "",
//       "hsnCode": "",
//       "taxCode": "",
//       "chasisNo": "",
//       "shortChasis": "",
//       "engineNo": "",
//       "color": "",
//       "mafgDate": "",
//       "location": "",
//       "lotNo": "",
//       "entTime": "",
//       "entDate": "",
//       "tankNo": "",
//       "sinvNo":"",
//       "batteryNo": "",
//       "kitNo": "",
//       "docNo": "",
//       "transit":""
//     };
//     this.listPurchaseDetails=[];
//   }
//   public listPurchaseDetails = [this.objPurchaseDetail];
//   public listVehicleDetails = [];
//   constructor(private http: HttpClient) { }
//    public getVehiclePurchaseDetails(objVPobject: any) {
//     debugger;
//     const headers = new HttpHeaders().set('content-type', 'application/json');
//     let uri = environment.apiURL + 'VehiclePurchase/GetVehiclePurchaseDetails';
//     //console.log(objVPobject);

//     alert(uri);
//     var param = { "obj": JSON.stringify(objVPobject) };
//     return this.http.post(uri, param, { headers });
//   }
//   AddFileDetails(data: FormData): Observable<string> {
//     let headers = new HttpHeaders();
//     headers.append('Content-Type', 'application/json');
//     const httpOptions = {
//       headers: headers
//     };
//     return this.http.post<string>(environment.apiURL + 'VehiclePurchase/AddFileDetails', data, httpOptions);
//   }  

//   post(url: string, data: any): Observable<any> {

//     let URL = environment.apiURL + url;
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       }),
//       withCredentials: true
//     };
//     return this.http.post(URL, data).pipe(map(
//       (res: any) => {
//         //const data = res;
//         //return data;
//         return res
//       }
//     ));
//     //.catch(this.handleError.bind(this));
//   }
//   // public getLastVehiclePurchaseDetails(url, data): Observable<any>{
//   //  return this.post(url, data).subscribe(
//   //     data => {
//   //       return data;
//   //     });
//   // }
// }
