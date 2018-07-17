import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { SearchService } from './search/search.service';
import { SearchResultService } from './search-result/search-result.service';
import { DescriptionService } from './description/description.service';
import { HierarchyService } from './search-result/hierarchy.service';


import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';

import { RouterModule, Routes } from '@angular/router';
import {shallowEqualArrays} from '@angular/router/src/utils/collection';
import { ExpandableListModule } from 'angular2-expandable-list';
import { DescriptionComponent } from './description/description.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';


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
    FlashMessagesModule.forRoot()
  ],
  providers: [SearchService, SearchResultService, DescriptionService, HierarchyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
