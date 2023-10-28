import { JournalComponent } from '../journal/journal.component';

export const childRoutes = [
  {
    path: 'admin', loadChildren:()=>import('../admin/admin.module')
    .then(mod=>mod.AdminModule)
   },
   {
    path: 'enquiry', loadChildren:()=>import('../enquiry/enquiry.module')
    .then(mod=>mod.EnquiryModule)
   },
   {
    path: 'master', loadChildren:()=>import('../master/master.module')
    .then(mod=>mod.MasterModule)
   },
   {
    path: 'sales', loadChildren:()=>import('../sales/sales.module')
    .then(mod=>mod.SalesModule)
   },
   {
    path: 'aftersales', loadChildren:()=>import('../aftersales/aftersales.module')
    .then(mod=>mod.AftersalesModule)
   },
   {
    path: 'account', loadChildren:()=>import('../account/account.module')
    .then(mod=>mod.AccountModule)
   },
   {
    path: 'purchase', loadChildren:()=>import('../purchase/purchase.module')
    .then(mod=>mod.PurchaseModule)
   },
   { path: 'journal', component: JournalComponent}
];
