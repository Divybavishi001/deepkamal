import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { QuotationComponent } from './quotation/quotation.component';
import { FollowupComponent } from './followup/followup.component';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [
    EnquiryComponent,
    QuotationComponent,
    FollowupComponent,
    
  ],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    MatModule,
    PaginationModule
  ]
})
export class EnquiryModule { }
