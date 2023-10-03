import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';
import { PaginationModule } from '../pagination/pagination.module';

import { PurchaseRoutingModule } from './purchase-routing.module';
// import { VehiclepurchaseComponent } from './vehiclepurchase/vehiclepurchase.component';
import { MiscellaneouspurchaseComponent } from './miscellaneouspurchase/miscellaneouspurchase.component';


@NgModule({
  declarations: [
    // VehiclepurchaseComponent,
    MiscellaneouspurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    PaginationModule,
    MatModule
  ]
})
export class PurchaseModule { }
