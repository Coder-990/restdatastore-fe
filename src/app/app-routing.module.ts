import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from "./components/companies/companies.component";
import {AddCompanyComponent} from "./components/companies/add-company/add-company.component";
import {EditCompanyComponent} from "./components/companies/edit-company/edit-company.component";
import {ViewCompanyComponent} from "./components/companies/view-company/view-company.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'companies/admin', pathMatch: 'full'},
  {path: 'companies/admin', component: CompaniesComponent},
  {path: 'companies/add', component: AddCompanyComponent},
  {path: 'companies/edit/:id', component: EditCompanyComponent},
  {path: 'companies/view/:id', component: ViewCompanyComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
