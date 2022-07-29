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
  prodData: any = [];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { }
  

  getBulk(){
    this.httpService.getProduct().subscribe(data => {
      console.warn(data);
      this.prodData = data;
    })
  }
 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['product-search']){
        this.searchProducts(params['product-search']);
      }
      else if(params['product-pnpStore']){
        this.storePickus();
      }
      else if(params['product-woolStore']){
        this.storeWoolies();
      }
      else{
        this.httpService.getRandom().subscribe(data => {
          this.prodData = data;
        })
      }
    });
  }

  storeWoolies(){
    this.httpService.getWoolies().subscribe(data => {
      this.prodData = data;
    })
  }

  storePickus(){
    this.httpService.getPickus().subscribe(data => {
      this.prodData = data;
    })
  }

  searchProducts(search?: string):void {
    this.httpService.getBySearch(search).subscribe(data => {
      this.prodData = data;
    });
  }

}
