// import { Component ,OnInit} from '@angular/core';
// import { Router } from '@angular/router';
// import { VehiclepurchaseService } from './vehiclepurchase.service';


// @Component({
//   selector: 'app-vehiclepurchase',
//   templateUrl: './vehiclepurchase.component.html',
//   styleUrls: ['./vehiclepurchase.component.css']
// })
// export class VehiclepurchaseComponent implements OnInit{
//   constructor(public vehiclePurchaseService: VehiclepurchaseService,
//     private router: Router) { }
//   public lstVcode: any = [];
//   public lstTax: any = [];
//   public lstTransporter: any = [];
//   public isNew: boolean = false;
//   public lstColor: any[] = [];
//   public lstLocation: any[] = [];
//   displayStyle = "none";
//   public frmDisabled = true;
//   public pageColor: string = "white";
//   public searchDoc: string = "";
//   public isSearchDoc: boolean = false;
//   ngOnInit(): void {
//     this.vehiclePurchaseService.resetServiceData();
//     this.getLastVehiclePurchaseDetials();
//     //console.log(this.vehiclePurchaseService.listPurchaseDetails);
//   }

//   public getnetAmtValue(obj :any) {
//     ;
//     //alert(obj.igstr);
//     obj.netAmt = obj.qty * obj.rate;
//     obj.cgstAmt = (obj.netAmt * obj.cgstr) / 100;
//     obj.sgstAmt = (obj.netAmt * obj.sgstr) / 100;
//     obj.igstAmt = (obj.netAmt * obj.igstr) / 100;
//     obj.gcessAmt = (obj.netAmt * obj.gstcessr) / 100;
//     obj.totGST = obj.cgstAmt + obj.sgstAmt + obj.igstAmt + obj.gcessAmt;
//     obj.totAmt = obj.netAmt + obj.totGST;
//     this.calculation();
//   }
//   public calculation() {

//     this.vehiclePurchaseService.objVehiclePurchase.netAmount = 0;
//     this.vehiclePurchaseService.objVehiclePurchase.cgstAmount = 0;
//     this.vehiclePurchaseService.objVehiclePurchase.sgstAmount = 0;
//     this.vehiclePurchaseService.objVehiclePurchase.igstAmount = 0;
//     this.vehiclePurchaseService.objVehiclePurchase.gstCessAmount = 0;
//     this.vehiclePurchaseService.objVehiclePurchase.totalGSTAmount = 0;
//     this.vehiclePurchaseService.objVehiclePurchase.totalGridAmount = 0;

//     for (let i = 0; i < this.vehiclePurchaseService.listPurchaseDetails.length; i++) {
//       this.vehiclePurchaseService.objVehiclePurchase.netAmount += this.vehiclePurchaseService.listPurchaseDetails[i].netAmt;

//       this.vehiclePurchaseService.objVehiclePurchase.cgstAmount += this.vehiclePurchaseService.listPurchaseDetails[i].cgstAmt;
//       this.vehiclePurchaseService.objVehiclePurchase.sgstAmount += this.vehiclePurchaseService.listPurchaseDetails[i].sgstAmt;
//       this.vehiclePurchaseService.objVehiclePurchase.igstAmount += this.vehiclePurchaseService.listPurchaseDetails[i].igstAmt;
//       this.vehiclePurchaseService.objVehiclePurchase.gstCessAmount += this.vehiclePurchaseService.listPurchaseDetails[i].gcessAmt;

//       this.vehiclePurchaseService.objVehiclePurchase.totalGSTAmount += this.vehiclePurchaseService.listPurchaseDetails[i].totGST;
//       this.vehiclePurchaseService.objVehiclePurchase.totalGridAmount += this.vehiclePurchaseService.listPurchaseDetails[i].totAmt;
//     }
//     this.calculateOtherChargeAndDiscount();
//   }
//   public calculateOtherChargeAndDiscount() {
//     this.vehiclePurchaseService.objVehiclePurchase.grantTotal = parseFloat(this.vehiclePurchaseService.objVehiclePurchase.totalGridAmount);
//     if (this.vehiclePurchaseService.objVehiclePurchase.otherCharge != "" && this.vehiclePurchaseService.objVehiclePurchase.otherCharge != 0)
//       this.vehiclePurchaseService.objVehiclePurchase.grantTotal = (parseFloat(this.vehiclePurchaseService.objVehiclePurchase.grantTotal) + parseFloat(this.vehiclePurchaseService.objVehiclePurchase.otherCharge));
//     if (this.vehiclePurchaseService.objVehiclePurchase.discount != "" && this.vehiclePurchaseService.objVehiclePurchase.discount != 0)
//       this.vehiclePurchaseService.objVehiclePurchase.grantTotal = (parseFloat(this.vehiclePurchaseService.objVehiclePurchase.grantTotal) - parseFloat(this.vehiclePurchaseService.objVehiclePurchase.discount));
//   }
//   public newRecord() {
//     debugger;
//     this.vehiclePurchaseService.listPurchaseDetails.push({
//       vCode: "",
//       vehicleName: "",
//       qty: 0,
//       rate: 0,
//       netAmt: 0,
//       gstcd: "",
//       cgstr: "",
//       sgstr: "",
//       igstr: "",
//       gstcessr: "",
//       cgstAmt: "",
//       sgstAmt: "",
//       igstAmt: "",
//       gcessAmt: "",
//       totGST: "",
//       totAmt: "",
//       lotNo: ""
//     });
//     console.log(this.vehiclePurchaseService.listPurchaseDetails);
//   }
//   public removeRecord(item :any) {
//     this.vehiclePurchaseService.listPurchaseDetails.splice(item, 1);
//     console.log(this.vehiclePurchaseService.listPurchaseDetails);

//     this.calculation();
//   }
//   public inputValidatorForTransit(event: any) {
//     //console.log(event.target.value);
//     const pattern = /^[YN]*$/;
//     //let inputChar = String.fromCharCode(event.charCode)
//     if (!pattern.test(event.target.value)) {
//       event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
//       // invalid character, prevent input

//     }
//   }
//   public saveVPDetail() {

//     if (this.vehiclePurchaseService.objVehiclePurchase.purchaseBranch.trim() == "") {
//       alert("Please enter Purchase Branch.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.acCode.trim() == "") {
//       alert("Please enter Account Code.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.documentDate.trim() == "") {
//       alert("Please enter Document Date.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.invoceNo.trim() == "") {
//       alert("Please enter Invoice Number.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.acName.trim() == "") {
//       alert("Please enter valid Account Number.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.dbName.trim() == "") {
//       alert("Please enter valid DB Code.");
//       return;
//     }
//     var isValidate: number = 0;

//     for (let i = 0; i < this.vehiclePurchaseService.listPurchaseDetails.length; i++) {

//       if (this.vehiclePurchaseService.listPurchaseDetails[i].vCode == "") {
//         isValidate = 1;
//         break;
//       }

//       if (this.vehiclePurchaseService.listPurchaseDetails[i].qty.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].qty == 0) {
//         isValidate = 2;
//         break;
//       }
//       if (this.vehiclePurchaseService.listPurchaseDetails[i].rate.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].rate == 0) {
//         isValidate = 3;
//         break;
//       }
//     }
//     if (isValidate == 1) {
//       alert("Please enter VCode.");
//       return;
//     }
//     if (isValidate == 2) {
//       alert("Please enter Quentity.");
//       return;
//     }
//     if (isValidate == 3) {
//       alert("Please enter Rate.");
//       return;
//     }
//     this.vehiclePurchaseService.post("VehiclePurchase/GetVehiclePurchaseDetails", this.vehiclePurchaseService.objVehiclePurchase).subscribe(
//       data => {
//         console.log(data);
//       });
//     //this.vehiclePurchaseService.getVehiclePurchaseDetails(this.vehiclePurchaseService.objVehiclePurchase);
//   }
//   public getLastVehiclePurchaseDetials() {
//     var param = {};
//     // this.loaderService.show();
//     this.vehiclePurchaseService.post("VehiclePurchase/getLastVehiclePurchaseDetails", param).subscribe(
//       data => {
//         this.vehiclePurchaseService.objVehiclePurchase = data["Table"][0];
//         this.vehiclePurchaseService.listPurchaseDetails = data["Table1"];
//         this.lstVcode = data["Table2"];
//         this.lstTax = data["Table3"];
//         this.lstTransporter = data["Table4"];
//         this.lstColor = data["Table5"];
//         this.lstLocation = data["Table6"];
//         if (this.vehiclePurchaseService.objVehiclePurchase.dbCode != "")
//           this.isNew = false;
//         console.log(this.vehiclePurchaseService.objVehiclePurchase);
//         console.log(data);
//         // this.loaderService.hide();
//       });
//   }
//   getVCode($event :any, i :any, obj :any) {

//     var param = { "vCode": $event };
//     //alert($event);
//     //if ($event.length > 1) {
//     this.vehiclePurchaseService.listPurchaseDetails[i].vehicleName = "";
//     this.vehiclePurchaseService.listPurchaseDetails[i].gstcd = "";
//     this.vehiclePurchaseService.listPurchaseDetails[i].cgstr = "";
//     this.vehiclePurchaseService.listPurchaseDetails[i].sgstr = "";
//     this.vehiclePurchaseService.listPurchaseDetails[i].igstr = "";
//     this.vehiclePurchaseService.listPurchaseDetails[i].gstcessr = "";
//     this.vehiclePurchaseService.post("VehiclePurchase/getVcode", param).subscribe(
//       data => {
//         //alert(data["Table"].length);
//         if (data != undefined && data["Table"].length > 0) {

//           //this.lstVcode = data["Table"][0]["ItemName"];
//           this.vehiclePurchaseService.listPurchaseDetails[i].vehicleName = data["Table"][0]["ItemName"];
//           this.vehiclePurchaseService.listPurchaseDetails[i].gstcd = data["Table"][0]["pgstcd"];
//           this.vehiclePurchaseService.listPurchaseDetails[i].cgstr = data["Table"][0]["Pcgstr"];
//           this.vehiclePurchaseService.listPurchaseDetails[i].sgstr = data["Table"][0]["PSgstr"];
//           this.vehiclePurchaseService.listPurchaseDetails[i].igstr = data["Table"][0]["PIgstr"];
//           this.vehiclePurchaseService.listPurchaseDetails[i].gstcessr = data["Table"][0]["PGSTCESSR"];
//           console.log(data["Table"]);
//           console.log("Data == >" + data);
//         }
//         //alert(obj.gstcessr);
//         this.getnetAmtValue(obj);
//       });
//     //}
//   }
//   getVCodeSuggestiveSearch($event :any , i :any) {

//     var param = { "vCode": $event };
//     if ($event.length > 3) {
//       debugger;
//       this.vehiclePurchaseService.post("VehiclePurchase/getVcode", param).subscribe(
//         data => {
//           //alert(data.length);
//           if (data != undefined && data["Table"].length > 0) {

//             this.lstVcode = data["Table"];
//             console.log("lstVcode ==>" + this.lstVcode);
//             console.log(data["Table"]);
//             console.log("Data == >" + data);
//           }
//         });
//     }
//   }
//   public getDBName() {
//     var param = { "dbCode": this.vehiclePurchaseService.objVehiclePurchase.dbCode };
//     this.vehiclePurchaseService.objVehiclePurchase.dbName = "";
//     this.vehiclePurchaseService.objVehiclePurchase.documentNo = "";
//     this.vehiclePurchaseService.post("VehiclePurchase/getDBName", param).subscribe(
//       data => {
//         //alert(data.length);
//         if (data != undefined && data["Table"].length > 0) {
//           // if(this.vehiclePurchaseService.objVehiclePurchase.dbCode.length==1)
//           //   this.vehiclePurchaseService.objVehiclePurchase.documentNo = "P0" + this.vehiclePurchaseService.objVehiclePurchase.dbCode + "/";
//           //   else
//           //   this.vehiclePurchaseService.objVehiclePurchase.documentNo = "P" + this.vehiclePurchaseService.objVehiclePurchase.dbCode + "/";
//           this.vehiclePurchaseService.objVehiclePurchase.dbName = data["Table"][0]["dbNAme"];
//           this.vehiclePurchaseService.objVehiclePurchase.documentNo = data["Table1"][0]["maxDocNo"];
//         }
//       });
//   }
//   public getAccName() {
//     var param = { "acCode": this.vehiclePurchaseService.objVehiclePurchase.acCode };
//     this.vehiclePurchaseService.objVehiclePurchase.acName = "";
//     this.vehiclePurchaseService.post("VehiclePurchase/getAccName", param).subscribe(
//       data => {
//         //alert(data.length);
//         if (data != undefined && data["Table"].length > 0) {
//           this.vehiclePurchaseService.objVehiclePurchase.acName = data["Table"][0]["acName"];
//         }
//       });
//   }
//   public createNew() {
//     this.vehiclePurchaseService.resetServiceData();
//     this.newRecord();
//     this.isNew = true;
//   }
//   public GetActionName($event :any) {
//     //alert("frm purchase ===>  " + $event);

//     if ($event == "New") {
//       this.vehiclePurchaseService.resetServiceData();
//       this.newRecord();
//       this.pageColor = "LightCyan";
//       this.isNew = true;
//       this.frmDisabled = false;
//       this.isSearchDoc = false;
//     }
//     else if ($event == "Open") {
//       this.frmDisabled = false;
//       this.pageColor = "LightGreen";
//       this.isSearchDoc = false;
//     }
//     else if ($event == "Next") {
//       this.frmDisabled = true;
//       this.isSearchDoc = false;
//       this.getPreviousNextFirstLast("VehiclePurchase", this.vehiclePurchaseService.objVehiclePurchase.documentNo.toString(), "Next");
//     }
//     else if ($event == "Previous") {
//       this.frmDisabled = true;
//       this.isSearchDoc = false;
//       this.getPreviousNextFirstLast("VehiclePurchase", this.vehiclePurchaseService.objVehiclePurchase.documentNo.toString(), "Previous");
//     }
//     else if ($event == "First") {
//       this.frmDisabled = true;
//       this.isSearchDoc = false;
//       this.getPreviousNextFirstLast("VehiclePurchase", this.vehiclePurchaseService.objVehiclePurchase.documentNo.toString(), "First");
//     }
//     else if ($event == "Last") {
//       this.frmDisabled = true;
//       this.isSearchDoc = false;
//       this.getPreviousNextFirstLast("VehiclePurchase", this.vehiclePurchaseService.objVehiclePurchase.documentNo.toString(), "Last");
//     }
//     else if ($event == "Cancel") {
//       this.frmDisabled = true;
//       this.isSearchDoc = false;
//       this.getLastVehiclePurchaseDetials();
//     }
//     else if ($event == "Close") {
//       this.frmDisabled = true;
//       this.isSearchDoc = false;
//       this.router.navigate(['/MainMenu'], { skipLocationChange: true });
//     }
//     else if ($event == "Find") {
//       this.pageColor = "Moccasin";
//       this.newRecord();
//       this.isNew = true;
//       this.frmDisabled = false;
//       this.isSearchDoc = true;
//       //this.getLastVehiclePurchaseDetials();
//     }
//     else if ($event == "Save") {
//       if (this.vehiclePurchaseService.objVehiclePurchase.purchaseBranch.trim() == "") {
//         alert("Please enter Purchase Branch.");
//         return;
//       }
//       if (this.vehiclePurchaseService.objVehiclePurchase.acCode.trim() == "") {
//         alert("Please enter Account Code.");
//         return;
//       }
//       if (this.vehiclePurchaseService.objVehiclePurchase.documentDate.trim() == "") {
//         alert("Please enter Document Date.");
//         return;
//       }
//       if (this.vehiclePurchaseService.objVehiclePurchase.invoceNo.trim() == "") {
//         alert("Please enter Invoice Number.");
//         return;
//       }
//       if (this.vehiclePurchaseService.objVehiclePurchase.acName.trim() == "") {
//         alert("Please enter valid Account Number.");
//         return;
//       }
//       if (this.vehiclePurchaseService.objVehiclePurchase.dbName.trim() == "") {
//         alert("Please enter valid DB Code.");
//         return;
//       }
//       var isValidate: number = 0;

//       for (let i = 0; i < this.vehiclePurchaseService.listPurchaseDetails.length; i++) {

//         if (this.vehiclePurchaseService.listPurchaseDetails[i].vCode == "") {
//           isValidate = 1;
//           break;
//         }

//         if (this.vehiclePurchaseService.listPurchaseDetails[i].qty.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].qty == 0) {
//           isValidate = 2;
//           break;
//         }
//         if (this.vehiclePurchaseService.listPurchaseDetails[i].rate.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].rate == 0) {
//           isValidate = 3;
//           break;
//         }
//       }
//       if (isValidate == 1) {
//         alert("Please enter VCode.");
//         return;
//       }
//       if (isValidate == 2) {
//         alert("Please enter Quentity.");
//         return;
//       }
//       if (isValidate == 3) {
//         alert("Please enter Rate.");
//         return;
//       }
//       this.isSearchDoc = false;
//       let objList = [];
//       for (let i = 0; i < this.vehiclePurchaseService.listPurchaseDetails.length; i++) {
//         if (this.vehiclePurchaseService.listPurchaseDetails[i].vCode.trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].qty.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].rate.toString().trim() == "") {
//           continue;
//         }
//         else {
//           objList.push(this.vehiclePurchaseService.listPurchaseDetails[i]);
//         }
//       }
//       let param = {
//         objVehiclePurchase: this.vehiclePurchaseService.objVehiclePurchase,
//         vehicleDeailList: objList
//       }
//       this.vehiclePurchaseService.post("VehiclePurchase/saveVehiclePurchase", param).subscribe(
//         data => {
//           console.log(data);
//           if (data != null && data["Table"][0] != undefined) {
//             this.vehiclePurchaseService.objVehiclePurchase = data["Table"][0];
//             this.vehiclePurchaseService.listPurchaseDetails = data["Table1"];
//           }
//         });
//     }
//   }
//   public getTaxName(item :any) {
//     //alert(item);
//     var find_tax = this.lstTax.find((x: { code: any; }) => x.code == item);
//     this.vehiclePurchaseService.objVehiclePurchase.taxName = find_tax.name;
//     //console.log(find_tax);
//   }
//   public getTransporterName(item :any) {
//     //alert(item);
//     var find_transporter = this.lstTransporter.find((x: { transportercd: any; }) => x.transportercd == item);
//     this.vehiclePurchaseService.objVehiclePurchase.transporterName = find_transporter.transporterNm;
//     //console.log(find_transporter);
//   }
//   openPopup(obj :any) {
//     this.displayStyle = "block";

//     let param = {
//       docNo: this.vehiclePurchaseService.objVehiclePurchase.documentNo,
//       lotNo: obj.lotNo
//     }
//     this.vehiclePurchaseService.post("VehiclePurchase/getVehicleDetailByDocNo", param).subscribe(
//       data => {
//         if (data != undefined && data["Table"].length > 0) {
//           this.vehiclePurchaseService.listVehicleDetails = data["Table"];
//         }
//         else {
//           // this.vehiclePurchaseService.listVehicleDetails = [];
//           // for (let i = 0; i < obj.qty; i++) {
//           //   this.vehiclePurchaseService.listVehicleDetails.push({
//           //     "psRnO": (i + 1).toString(),
//           //     "doNo": 0,
//           //     "pdate": this.vehiclePurchaseService.objVehiclePurchase.documentDate,
//           //     "pBranch": this.vehiclePurchaseService.objVehiclePurchase.purchaseBranch,
//           //     "itemCode": obj.vCode,
//           //     "prodCode": "",
//           //     "hsnCode": "",
//           //     "taxCode": this.vehiclePurchaseService.objVehiclePurchase.taxCode,
//           //     "chasisNo": "",
//           //     "shortChasis": "",
//           //     "engineNo": "",
//           //     "color": "",
//           //     "mafgDate": "",
//           //     "location": "",
//           //     "lotNo": obj.lotNo,
//           //     "entTime": "",
//           //     "entDate": "",
//           //     "tankNo": "",
//           //     "sinvNo": "",
//           //     "batteryNo": "",
//           //     "kitNo": "",
//           //     "docNo": this.vehiclePurchaseService.objVehiclePurchase.documentNo,
//           //     "transit": this.vehiclePurchaseService.objVehiclePurchase.transit
//           //   });
//           // }
//         }
//       });
//     alert(obj.vCode);

//   }
//   closePopup() {
//     this.displayStyle = "none";
//   }
//   public saveVehicleDetails() {
//     let param = {
//       vehicleDeailLst: this.vehiclePurchaseService.listVehicleDetails
//     };
//     let isValidate = 0;
//     for (let i = 0; i < this.vehiclePurchaseService.listVehicleDetails.length; i++) {

//       // if (this.vehiclePurchaseService.listVehicleDetails[i].chasisNo == "" || this.vehiclePurchaseService.listVehicleDetails[i].engineNo == "" || this.vehiclePurchaseService.listVehicleDetails[i].color == "" || this.vehiclePurchaseService.listVehicleDetails[i].location == "" || this.vehiclePurchaseService.listVehicleDetails[i].mafgDate == "") {
//       //   isValidate = 1;
//       //   break;
//       // }
//     }
//     if (isValidate == 1) {
//       alert("Please Complete All Details.");
//       return;
//     }
//     this.vehiclePurchaseService.post("VehiclePurchase/saveVehicleDetails", param).subscribe(
//       data => {
//         alert("Data Saved Successfully.");
//         this.closePopup();
//         //console.log(data);
//       });
//   }
//   public getPreviousNextFirstLast(pageName: string, param: string, action: string) {
//     var parm = {
//       pageName: pageName,
//       param: param,
//       action: action
//     };
//     // this.loaderService.show();
//     this.vehiclePurchaseService.post("Common/getPreviousNextFirstLast", parm).subscribe(
//       data => {
//         console.log(data["Table"][0]);
//         if (data != null && data["Table"][0] != undefined) {
//           this.vehiclePurchaseService.objVehiclePurchase = data["Table"][0];
//           this.vehiclePurchaseService.listPurchaseDetails = data["Table1"];
//         }
//         else {
//           alert("Data not available.")
//         }
//         // this.loaderService.hide();
//       });
//   }
//   public searchDocument() {
//     this.frmDisabled = true;
//     this.getPreviousNextFirstLast("VehiclePurchase", this.searchDoc.toString(), "Find");
//   }
//   fileUpload() {
//     if (this.vehiclePurchaseService.objVehiclePurchase.purchaseBranch.toString().trim() == "") {
//       alert("Please enter Purchase Branch.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.acCode.toString().trim() == "") {
//       alert("Please enter Account Code.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.documentDate.toString().trim() == "") {
//       alert("Please enter Document Date.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.invoceNo.toString().trim() == "") {
//       alert("Please enter Invoice Number.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.acName.toString().trim() == "") {
//       alert("Please enter valid Account Number.");
//       return;
//     }
//     if (this.vehiclePurchaseService.objVehiclePurchase.dbName.toString().trim() == "") {
//       alert("Please enter valid DB Code.");
//       return;
//     }
//     var isValidate: number = 0;

//     for (let i = 0; i < this.vehiclePurchaseService.listPurchaseDetails.length; i++) {

//       if (this.vehiclePurchaseService.listPurchaseDetails[i].vCode == "") {
//         isValidate = 1;
//         break;
//       }

//       if (this.vehiclePurchaseService.listPurchaseDetails[i].qty.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].qty == 0) {
//         isValidate = 2;
//         break;
//       }
//       if (this.vehiclePurchaseService.listPurchaseDetails[i].rate.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].rate == 0) {
//         isValidate = 3;
//         break;
//       }
//     }
//     if (isValidate == 1) {
//       alert("Please enter VCode.");
//       return;
//     }
//     if (isValidate == 2) {
//       alert("Please enter Quentity.");
//       return;
//     }
//     if (isValidate == 3) {
//       alert("Please enter Rate.");
//       return;
//     }
//     debugger;
//     // this.loaderService.show();
//     let formData = new FormData();
//     // formData.append('FileUpload', this.resumeInput.nativeElement.files[0]);

//     formData.append('DocNo', this.vehiclePurchaseService.objVehiclePurchase.documentNo);
//     formData.append('dbCode', this.vehiclePurchaseService.objVehiclePurchase.dbCode);
//     formData.append('receivedDate', this.vehiclePurchaseService.objVehiclePurchase.receivedDate);
//     formData.append('documentDate', this.vehiclePurchaseService.objVehiclePurchase.documentDate);
//     formData.append('truckNo', this.vehiclePurchaseService.objVehiclePurchase.truckNo);
//     formData.append('purchaseBranch', this.vehiclePurchaseService.objVehiclePurchase.purchaseBranch);
//     formData.append('transporterNo', this.vehiclePurchaseService.objVehiclePurchase.transporterNo);
//     formData.append('transporterName', this.vehiclePurchaseService.objVehiclePurchase.transporterName);
//     formData.append('taxCode', this.vehiclePurchaseService.objVehiclePurchase.taxCode);
//     formData.append('acCode', this.vehiclePurchaseService.objVehiclePurchase.acCode);
//     formData.append('fDate', this.vehiclePurchaseService.objVehiclePurchase.fDate);
//     formData.append('rd', this.vehiclePurchaseService.objVehiclePurchase.rd);
//     formData.append('transit', this.vehiclePurchaseService.objVehiclePurchase.transit);
//     formData.append('stForm', this.vehiclePurchaseService.objVehiclePurchase.stForm);
//     formData.append('invoiceDate', this.vehiclePurchaseService.objVehiclePurchase.invoiceDate);
//     formData.append('remark', this.vehiclePurchaseService.objVehiclePurchase.remark);
//     formData.append('uploadByPartyYN', this.vehiclePurchaseService.objVehiclePurchase.uploadByPartyYN);
//     console.log(formData);

//     let objList = [];
//     for (let i = 0; i < this.vehiclePurchaseService.listPurchaseDetails.length; i++) {
//       if (this.vehiclePurchaseService.listPurchaseDetails[i].vCode.trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].qty.toString().trim() == "" || this.vehiclePurchaseService.listPurchaseDetails[i].rate.toString().trim() == "") {
//         continue;
//       }
//       else {
//         objList.push(this.vehiclePurchaseService.listPurchaseDetails[i]);
//       }
//     }
//     let param = {
//       objVehiclePurchase: this.vehiclePurchaseService.objVehiclePurchase,
//       vehicleDeailList: objList
//     }
//     this.vehiclePurchaseService.post("VehiclePurchase/saveVehiclePurchase", param).subscribe(
//       data => {
//         // console.log(data );
//         this.vehiclePurchaseService.AddFileDetails(formData).subscribe(data => {
//           // console.log(data["Table"][0]);
//           if (data != null && data["Table"][0] != undefined) {
//             this.vehiclePurchaseService.objVehiclePurchase = data["Table"][0];
//             this.vehiclePurchaseService.listPurchaseDetails = data["Table1"];
//           }
//           else {
//             alert("Some Exception occured.")
//           }
//           // this.loaderService.hide();
//         });
//       });



//   }

// }
