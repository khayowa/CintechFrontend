import { ItemResultsComponent } from './components/item-results/item-results.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: DisplayProductsComponent, outlet: 'outputDisplay'
  },
  {
    path: 'selectWool/:product-woolStore',
    component: DisplayProductsComponent, outlet: 'outputDisplay'
  },
  {
    path: 'selectPnP/:product-pnpStore',
    component: DisplayProductsComponent, outlet: 'outputDisplay'
  },
  {
    path: 'search/:product-search',
    component: DisplayProductsComponent, outlet: 'outputDisplay'
  },
  {
    path: 'filterByProduct/:product-filterBy',
    component: DisplayProductsComponent, outlet: 'outputDisplay'
  },
  {
    path: 'titleSearch/:product-titleSearch',
    component: ItemResultsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
