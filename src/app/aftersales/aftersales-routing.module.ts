import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceComponent } from './insurance/insurance.component';
import { RtoComponent } from './rto/rto.component';
import { CrtempComponent } from './crtemp/crtemp.component';

const routes: Routes = [
  {path: 'insurance', component:InsuranceComponent},
  {path: 'rto',component:RtoComponent},
  {path: 'crtemp',component:CrtempComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AftersalesRoutingModule { }
