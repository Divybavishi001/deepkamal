import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path : 'sales',component :SalesComponent},
  {path: 'purchase',component : PurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
