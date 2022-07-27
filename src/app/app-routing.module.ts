import { ItemResultsComponent } from './components/item-results/item-results.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'selectStore',
    component: DisplayProductsComponent,
  },
  {
    path: 'search/:product-search',
    component: DisplayProductsComponent,
  },
  {
    path: 'filterByProduct',
    component: DisplayProductsComponent,
  },
  {
    path: 'listSearch/:product-listSearch',
    component: ItemResultsComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
