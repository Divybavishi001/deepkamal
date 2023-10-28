import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from '../journal/journal.component';
import { LayoutComponent } from './layout.component';
import { childRoutes } from './child-routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      
      ...childRoutes
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
