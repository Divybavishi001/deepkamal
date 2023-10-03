import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { LoginComponent } from './login/login.component';
import { MatModule } from './../mat/mat.module'


@NgModule({
  declarations: [
    SalesComponent,
    PurchaseComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatModule
  ]
})
export class AdminModule { }
