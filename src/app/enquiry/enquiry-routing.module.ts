import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { QuotationComponent } from './quotation/quotation.component';
import { FollowupComponent } from './followup/followup.component';

const routes: Routes = [
  {path : 'enquiry', component: EnquiryComponent},
  {path : 'quotation', component: QuotationComponent},
  {path: 'followup', component: FollowupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryRoutingModule { }
