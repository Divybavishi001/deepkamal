import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';
import { PaginationModule } from '../pagination/pagination.module';

import { SalesRoutingModule } from './sales-routing.module';
import { AccountcreationComponent } from './accountcreation/accountcreation.component';
import { DelivryorderComponent } from './delivryorder/delivryorder.component';
import { AllotmentComponent } from './allotment/allotment.component';
import { RetailinvoiceComponent } from './retailinvoice/retailinvoice.component';
import { BookingreceiptComponent } from './bookingreceipt/bookingreceipt.component';
import { MiscellaneoussalesComponent } from './miscellaneoussales/miscellaneoussales.component';


@NgModule({
  declarations: [
    AccountcreationComponent,
    DelivryorderComponent,
    AllotmentComponent,
    RetailinvoiceComponent,
    BookingreceiptComponent,
    MiscellaneoussalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatModule,
    PaginationModule
  ]
})
export class SalesModule { }
