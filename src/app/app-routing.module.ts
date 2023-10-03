import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AgentLoginComponent } from './agent-login/agent-login.component';
 import { ConnectComponent } from './connect/connect.component';
import { EnquiryAgentComponent } from './enquiry-agent/enquiry-agent.component';
// import { ExpenseRegisterComponent } from './expense-register/expense-register.component';
import { LoginComponent } from './Login/login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { VehiclepurchaseComponent } from './vehiclepurchase/vehiclepurchase.component';
import { LedgeraccountComponent } from './ledgeraccount/ledgeraccount.component';
import { BookingreceiptComponent } from './bookingreceipt/bookingreceipt.component';
import { DeliveryorderComponent } from './deliveryorder/deliveryorder.component';
import { RetailinvoiceComponent } from './retailinvoice/retailinvoice.component';
import { VehicleaftersalesComponent } from './vehicleaftersales/vehicleaftersales.component';
import { MultiplevehicletaxComponent } from './multiplevehicletax/multiplevehicletax.component';
import { MiscellaneoussalesComponent } from './miscellaneoussales/miscellaneoussales.component';
import { MultipledoComponent } from './multipledo/multipledo.component';
import { FindchasisComponent } from './findchasis/findchasis.component';
import { VehicleaccessoryComponent } from './vehicleaccessory/vehicleaccessory.component';
// import { CashreceiptComponent } from './cashreceipt/cashreceipt.component';
import { CashbankcontraComponent } from './cashbankcontra/cashbankcontra.component';
import { PaysleepComponent } from './paysleep/paysleep.component';
import { ExpenseregisterComponent } from './expenseregister/expenseregister.component';
import { JournalComponent } from './journal/journal.component';
// import { TransportexpComponent } from './transportexp/transportexp.component';
import { AgentenquirycancelComponent } from './agentenquirycancel/agentenquirycancel.component';
import { MonthlysalesComponent } from './monthlysales/monthlysales.component';
import { TestmenuComponent } from './testmenu/testmenu.component';
import { DaybookComponent } from './daybook/daybook.component';
import { BankmasterComponent } from './bankmaster/bankmaster.component';
// import { LocationComponent } from './location/location.component';
import { MiscellaneousitemmasterComponent } from './miscellaneousitemmaster/miscellaneousitemmaster.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { ColorComponent } from './color/color.component';
import { MiscellaneouspurchaseComponent } from './miscellaneouspurchase/miscellaneouspurchase.component';
import { AgentComponent } from './agent/agent.component';
import { HpaComponent } from './hpa/hpa.component';
import { AreaComponent } from './area/area.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { TransportmstComponent } from './transportmst/transportmst.component';
import { FinancecosegmentComponent } from './financecosegment/financecosegment.component';
import { SchememasterComponent } from './schememaster/schememaster.component';
import { CustomerprofilemasterComponent } from './customerprofilemaster/customerprofilemaster.component';
import { DaybooktypeComponent } from './daybooktype/daybooktype.component';


const routes: Routes = [
  {
    path: 'admin', loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
   },
   {
    path: 'enquiry', loadChildren:()=>import('./enquiry/enquiry.module')
    .then(mod=>mod.EnquiryModule)
   },
   {
    path: 'master', loadChildren:()=>import('./master/master.module')
    .then(mod=>mod.MasterModule)
   },
   {
    path: 'sales', loadChildren:()=>import('./sales/sales.module')
    .then(mod=>mod.SalesModule)
   },
   {
    path: 'aftersales', loadChildren:()=>import('./aftersales/aftersales.module')
    .then(mod=>mod.AftersalesModule)
   },
   {
    path: 'account', loadChildren:()=>import('./account/account.module')
    .then(mod=>mod.AccountModule)
   },
   {
    path: 'purchase', loadChildren:()=>import('./purchase/purchase.module')
    .then(mod=>mod.PurchaseModule)
   },
   { path: 'journal', component: JournalComponent},
  { path: 'login', component: LoginComponent }, 
  { path: 'vehiclepurchase', component: VehiclepurchaseComponent },
  // { path: 'ExpenseRegister', component: ExpenseRegisterComponent },
  { path: 'connect', component: ConnectComponent },
  // { path: 'AgentLogin', component: AgentLoginComponent },
  { path: 'Mainmenu', component: MainMenuComponent },
  { path: 'enquieyagent', component: EnquiryAgentComponent },
  { path: 'ledgeraccount', component: LedgeraccountComponent},
  { path: 'bookingreceipt', component: BookingreceiptComponent},
  { path: 'deliveryorder', component: DeliveryorderComponent},
  { path: 'retailinvoice', component: RetailinvoiceComponent},
  { path: 'vehicleaftersales', component: VehicleaftersalesComponent},
  { path: 'multiplevehicletax', component: MultiplevehicletaxComponent },
  { path: 'miscellaneoussales', component: MiscellaneoussalesComponent},
  { path: 'multipledo', component: MultipledoComponent},
  { path: 'findchasis', component: FindchasisComponent},
  { path: 'vehicleaccessory', component: VehicleaccessoryComponent},
  // { path: '', component: CashreceiptComponent},
  { path: 'cashbankcontra', component: CashbankcontraComponent},
  { path: 'paysleep', component: PaysleepComponent},
  { path: 'expenceregister', component: ExpenseregisterComponent},
  
  // { path: '', component: TransportexpComponent},
  { path: 'agentenquirycancel', component: AgentenquirycancelComponent},
  { path: 'monthlysales',component: MonthlysalesComponent},
  { path: 'testmenu',component: TestmenuComponent},
  { path: 'DaybookComponent',component:DaybookComponent},
  { path: 'BankmasterComponent',component:BankmasterComponent},
  // { path: 'LocationComponent',component:LocationComponent},
  { path: 'MiscellaneousitemmasterComponent',component:MiscellaneousitemmasterComponent},
  { path: 'TaxmasterComponent',component:TaxmasterComponent},
  { path: 'ColorComponent',component:ColorComponent},
  { path: 'MiscellaneouspurchaseComponent',component:MiscellaneouspurchaseComponent},
  { path:'AgentComponent',component:AgentComponent},
  { path: 'HpaComponent',component:HpaComponent},
  { path: 'AreaComponent',component:AreaComponent},
  { path: 'SalesmanComponent',component:SalesmanComponent},
  { path: 'TransportmstComponent',component:TransportmstComponent},
  { path: 'FinancecosegmentComponent',component:FinancecosegmentComponent},
  { path:'SchememasterComponent',component:SchememasterComponent},
   { path:'daybooktype',component:DaybooktypeComponent},
  { path: 'CustomerprofilemasterComponent',component:CustomerprofilemasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 