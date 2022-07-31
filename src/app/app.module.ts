import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SelectStoreComponent } from './components/select-store/select-store.component';
import { FilterByProductComponent } from './components/filter-by-product/filter-by-product.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { MakeListComponent } from './components/make-list/make-list.component';
import { ItemResultsComponent } from './components/item-results/item-results.component';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SelectStoreComponent,
    FilterByProductComponent,
    DisplayProductsComponent,
    MakeListComponent,
    ItemResultsComponent,
    DisplayListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
