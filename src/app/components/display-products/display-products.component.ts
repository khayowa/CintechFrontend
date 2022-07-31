import { HttpService } from './../../services/http.service';
import { Product, APIResponse } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LookUpService } from 'src/app/services/look-up.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  public sort!: string;
  public products!: Array<Product>;
  prodData: any = [];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private lookupService: LookUpService) { }
  

  
  ngOnInit(): void {
    this.lookupService.looksubj$.subscribe(lookup => {
      this.httpService.getBySearch(lookup).subscribe(data => {
        this.prodData = data;
      })
      //this.activatedRoute.params.subscribe((params: Params) => {
      // params['product-search'] == lookup;
      //  this.searchProducts(params['product-search']);
      // })     
    });

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
      else if(params['oilFilter']){
        this.filterProduct('filterByOil','oil');
      }
      else if(params['coffeeFilter']){
        this.filterProduct('filterByCoffee','coffee');
      }
      else if(params['maizeFilter']){
        this.filterProduct('filterByMaize','maize');
      }
      else if(params['eggFilter']){
        this.filterProduct('filterByOats','oats');
      }
      else if(params['milkFilter']){
        this.filterProduct('filterByMilk','milk');
      }
      else{
        this.httpService.getRandom().subscribe(data => {
          this.prodData = data;
        })
      }
    });
  }

  getBulk(){
    this.httpService.getProduct().subscribe(data => {
      console.warn(data);
      this.prodData = data;
    })
  }

  filterProduct(directive: string,product?: string){
    this.httpService.getByFilter(directive,product).subscribe(data => {
      this.prodData = data;
    })
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
