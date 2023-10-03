import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { VehiclepurchaseComponent } from './vehiclepurchase/vehiclepurchase.component';
import { MiscellaneouspurchaseComponent } from './miscellaneouspurchase/miscellaneouspurchase.component';

const routes: Routes = [
  // {path: 'vehiclepurchase',component:VehiclepurchaseComponent},
  {path: 'miscellaneouspurchase', component: MiscellaneouspurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
