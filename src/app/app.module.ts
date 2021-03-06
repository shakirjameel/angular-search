import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PopupModule} from 'ng2-opd-popup';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';

import {SearchService} from './search/search.service';
import {SearchResultService} from './search-result/search-result.service';
import {DescriptionService} from './description/description.service';
import {HierarchyService} from './search-result/hierarchy.service';
import {ProvisionToolService} from './checkout/provision-tool.service';
import {UpdateCartServiceService} from './navbar/update-cart-service.service';

import {SearchResultComponent} from './search-result/search-result.component';

import {RouterModule, Routes} from '@angular/router';
import {ExpandableListModule} from 'angular2-expandable-list';
import {DescriptionComponent} from './description/description.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CheckoutComponent} from './checkout/checkout.component';


const appRoutes: Routes = [
  {path:'', component: SearchComponent},
  {path:'search-result', component: SearchResultComponent},
  {path:'description', component: DescriptionComponent},
  {path:'checkout', component: CheckoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    DescriptionComponent,
    NavbarComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ExpandableListModule,
    RouterModule.forRoot(appRoutes),
    PopupModule.forRoot()
  ],
  providers: [SearchService, SearchResultService, DescriptionService, HierarchyService, ProvisionToolService, UpdateCartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
