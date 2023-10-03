import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../pagination/pagination.module';
import { MatModule } from '../mat/mat.module';

import { AccountRoutingModule } from './account-routing.module';
import { CashreceiptComponent } from './cashreceipt/cashreceipt.component';
import { CashpaymentsComponent } from './cashpayments/cashpayments.component';
import { BankreceiptComponent } from './bankreceipt/bankreceipt.component';
import { BankpaymentsComponent } from './bankpayments/bankpayments.component';
import { CashbankcontraComponent } from './cashbankcontra/cashbankcontra.component';


@NgModule({
  declarations: [
    CashreceiptComponent,
    CashpaymentsComponent,
    BankreceiptComponent,
    BankpaymentsComponent,
    CashbankcontraComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PaginationModule,
    MatModule
  ]
})
export class AccountModule { }
