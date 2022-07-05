import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {CompaniesComponent} from './components/companies/companies.component';
import {ShipmentsComponent} from './components/shipments/shipments.component';
import {ReceiptsComponent} from './components/receipts/receipts.component';
import {ItemReceiptsComponent} from './components/item-receipts/item-receipts.component';
import {ItemShipmentsComponent} from './components/item-shipments/item-shipments.component';
import {CancelItemShipmentsComponent} from './components/cancel-item-shipments/cancel-item-shipments.component';
import {CancelItemReceiptsComponent} from './components/cancel-item-receipts/cancel-item-receipts.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {AddCompanyComponent} from './components/companies/add-company/add-company.component';
import {EditCompanyComponent} from './components/companies/edit-company/edit-company.component';
import {ViewCompanyComponent} from './components/companies/view-company/view-company.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    ShipmentsComponent,
    ReceiptsComponent,
    ItemReceiptsComponent,
    ItemShipmentsComponent,
    CancelItemShipmentsComponent,
    CancelItemReceiptsComponent,
    ArticlesComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    ViewCompanyComponent,
    PageNotFoundComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
