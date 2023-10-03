import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashreceiptComponent } from './cashreceipt/cashreceipt.component';
import { CashpaymentsComponent } from './cashpayments/cashpayments.component';
import { BankpaymentsComponent } from './bankpayments/bankpayments.component';
import { BankreceiptComponent } from './bankreceipt/bankreceipt.component';
import { CashbankcontraComponent } from './cashbankcontra/cashbankcontra.component';

const routes: Routes = [
  {path: 'cashreceipt',component: CashreceiptComponent},
  {path: 'cashpayments',component: CashpaymentsComponent},
  {path: 'bankreceipt',component : BankreceiptComponent},
  {path: 'bankpayments',component: BankpaymentsComponent},
  {path: 'cashbankcontra',component: CashbankcontraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
