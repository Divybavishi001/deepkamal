import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectComponent } from './connect/connect.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EnquiryAgentComponent } from './enquiry-agent/enquiry-agent.component';
import { VehiclepurchaseComponent } from './vehiclepurchase/vehiclepurchase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageActionComponent } from './includes/page-action/page-action.component';
import { DownloadDocComponent } from './download-doc/download-doc.component';
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
import { CashreceiptComponent } from './cashreceipt/cashreceipt.component';
import { CashbankcontraComponent } from './cashbankcontra/cashbankcontra.component';
import { PaysleepComponent } from './paysleep/paysleep.component';
import { ExpenseregisterComponent } from './expenseregister/expenseregister.component';
import { JournalComponent } from './journal/journal.component';
import { TransportexpComponent } from './transportexp/transportexp.component';
import { AgentenquirycancelComponent } from './agentenquirycancel/agentenquirycancel.component';
import { MonthlysalesComponent } from './monthlysales/monthlysales.component';
import { TestmenuComponent } from './testmenu/testmenu.component';
import { LoaderComponent } from './loader/loader.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { TransportmstComponent } from './transportmst/transportmst.component';
import { FinancecosegmentComponent } from './financecosegment/financecosegment.component';
import { SchememasterComponent } from './schememaster/schememaster.component';
import { CustomerprofilemasterComponent } from './customerprofilemaster/customerprofilemaster.component';
import { AgentComponent } from './agent/agent.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import  {FormsModule } from '@angular/forms'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatExpansionModule} from '@angular/material/expansion';


import { NavbarComponent } from './navbar/navbar.component';
import { AreaComponent } from './area/area.component';
import { BankmasterComponent } from './bankmaster/bankmaster.component';
import { ColorComponent } from './color/color.component';
import { DaybookComponent } from './daybook/daybook.component';
import { HpaComponent } from './hpa/hpa.component';
import { InsurancemasterComponent } from './insurancemaster/insurancemaster.component';
// import { LocationComponent } from './location/location.component';
import { MiscellaneousitemmasterComponent } from './miscellaneousitemmaster/miscellaneousitemmaster.component';
import { MiscellaneouspurchaseComponent } from './miscellaneouspurchase/miscellaneouspurchase.component';
import { RtopassingcodeComponent } from './rtopassingcode/rtopassingcode.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { TdsmasterComponent } from './tdsmaster/tdsmaster.component';
import { TruckmasterComponent } from './truckmaster/truckmaster.component';
import { DaybooktypeComponent } from './daybooktype/daybooktype.component';
import { PaginationModule } from './pagination/pagination.module';
import { SortPipe } from './sort.pipe';
import { SortingDemoComponent } from './sorting-demo/sorting-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConnectComponent,
    MainMenuComponent,
    EnquiryAgentComponent,
    VehiclepurchaseComponent,
    PageActionComponent,
    DownloadDocComponent,
    LedgeraccountComponent,
    BookingreceiptComponent,
    DeliveryorderComponent,
    RetailinvoiceComponent,
    VehicleaftersalesComponent,
    MultiplevehicletaxComponent,
    MiscellaneoussalesComponent,
    MultipledoComponent,
    FindchasisComponent,
    VehicleaccessoryComponent,
    CashreceiptComponent,
    CashbankcontraComponent,
    PaysleepComponent,
    ExpenseregisterComponent,
    JournalComponent,
    TransportexpComponent,
    AgentenquirycancelComponent,
    MonthlysalesComponent,
    TestmenuComponent,
    LoaderComponent,
    SalesmanComponent,
    TransportmstComponent,
    FinancecosegmentComponent,
    SchememasterComponent,
    CustomerprofilemasterComponent,
    NavbarComponent,
    AgentComponent,
    AreaComponent,
    BankmasterComponent,
    ColorComponent ,
    CustomerprofilemasterComponent,
    DaybookComponent,
    FinancecosegmentComponent,
    HpaComponent,
    InsurancemasterComponent,
    // LocationComponent,
    MiscellaneousitemmasterComponent,
    MiscellaneouspurchaseComponent,
    RtopassingcodeComponent,
    SalesmanComponent,
    SchememasterComponent,
    TaxmasterComponent,
    TdsmasterComponent,
    TransportmstComponent,
    TruckmasterComponent,
    DaybooktypeComponent,
    SortPipe,
    SortingDemoComponent,
    



    // FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    PaginationModule,
    


    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
    CdkTreeModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
