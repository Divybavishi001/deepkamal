import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { ItemComponent } from './item/item.component';
import { MatModule } from '../mat/mat.module';


@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatModule
  ]
})
export class MasterModule { }
