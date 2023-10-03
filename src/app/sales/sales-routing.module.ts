import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountcreationComponent } from './accountcreation/accountcreation.component';
import { AllotmentComponent } from './allotment/allotment.component';
import { RetailinvoiceComponent } from './retailinvoice/retailinvoice.component';
import { DelivryorderComponent } from './delivryorder/delivryorder.component';
import { BookingreceiptComponent } from './bookingreceipt/bookingreceipt.component';
import { MiscellaneoussalesComponent } from './miscellaneoussales/miscellaneoussales.component';

const routes: Routes = [
  {path: 'accountcreation',component:AccountcreationComponent},
  {path: 'allotment',component:AllotmentComponent},
  {path: 'deliveryorder',component:DelivryorderComponent},
  {path: 'retailinvoice',component:RetailinvoiceComponent},
  {path: 'bookingreceipt',component:BookingreceiptComponent},
  {path: 'miscellaneoussales',component:MiscellaneoussalesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
