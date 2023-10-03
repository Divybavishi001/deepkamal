import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AftersalesRoutingModule } from './aftersales-routing.module';
import { InsuranceComponent } from './insurance/insurance.component';
import { RtoComponent } from './rto/rto.component';
import { CrtempComponent } from './crtemp/crtemp.component';
import { MatModule } from './../mat/mat.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [
    InsuranceComponent,
    RtoComponent,
    CrtempComponent
  ],
  imports: [
    CommonModule,
    AftersalesRoutingModule,
    MatModule,
    PaginationModule
  ]
})
export class AftersalesModule { }
