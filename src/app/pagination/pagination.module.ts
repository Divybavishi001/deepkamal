import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { MatModule } from '../mat/mat.module';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    MatModule
  ],
  exports:[PaginationComponent]
})
export class PaginationModule { }
