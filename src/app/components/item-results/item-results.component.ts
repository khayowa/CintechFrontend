import { APIResponse } from './../../models/models';
import { HttpService } from './../../services/http.service';
import { DisplayListComponent } from './../display-list/display-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddToListService } from 'src/app/services/add-to-list.service';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-item-results',
  templateUrl: './item-results.component.html',
  styleUrls: ['./item-results.component.css']
})
export class ItemResultsComponent implements OnInit {

  @ViewChild(DisplayListComponent) view! : DisplayListComponent

  public listProducts!: Array<Product>;
  itemProducts : any = [];

  prodName!:any;
  prodPrice!:any; 
  prodStore!:any;

  transferData(name: any, price: any, store: any){
    this.prodName = name
    this.prodPrice = price
    this.prodStore = store
  }

  constructor(private addToListService: AddToListService, private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['product-titleSearch']){
        this.searchItems(params['product-titleSearch']);
      }
    });

  }

  addToList(){
    this.addToListService.sendClickEvent();
  }

  searchItems(search?: string){
    this.httpService.getByTitle(search).subscribe(data => {
      this.itemProducts = data;
    })
  }


}
