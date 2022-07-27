import { HttpService } from './../../services/http.service';
import { Product, APIResponse } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  public sort!: string;
  public products!: Array<Product>;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { 
    this.httpService.getProducts().subscribe(data => {
      console.warn(data)
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['product-search']){
        this.searchProducts(params['product-search']);
      }
      else{
        
      }
    });
  }

  searchProducts(sort: string, search?: string):void {
    this.httpService.getProductList(sort, search).subscribe((productList: APIResponse<Product>) => {
      this.products = productList.results;
      console.log(productList);
    });
  }

}
