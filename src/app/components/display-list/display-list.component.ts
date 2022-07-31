import { HttpClient } from '@angular/common/http';
import { shoppingList } from './../../models/shoppingList';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddToListService } from 'src/app/services/add-to-list.service';
import { displayList } from 'src/app/models/displayList';
import { NgModel } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  clickEventSubscription!: Subscription;
  displaylist!: displayList[];
  shoppingList!: shoppingList[];

  @Input() prodName! : any;
  @Input() prodPrice! : any;
  @Input() prodStore! : any;
  @Input() prodUrl! : any;

  closeResult!: string;

  constructor(private addToListService: AddToListService) {
    this.clickEventSubscription = this.addToListService.getClickEvent().subscribe(() => {
      this.appendListItem();
    })
  }


  ngOnInit(): void {
 
    this.displaylist = [
      { 
        name: 'Jungle Oats 200g',
        price: 'R39.99',
        store: 'Woolworths'
      },
      {
        name: 'Full Cream Milk 6 x 1L',
        price: 'R79.99',
        store: 'Pick n Pay'
      }
    ]
    this.shoppingList = []

  }

  removeItem(id:number){
    this.displaylist = this.displaylist.filter((v, i) => i !== id);
    this.shoppingList = this.shoppingList.filter((v, i) => i !== id);
  }

  appendListItem(){
    this.displaylist.push({
      name : this.prodName,
      price : this.prodPrice,
      store : this.prodStore
    })

    this.shoppingList.push({
      url : this.prodUrl
    })

    console.log(this.prodUrl);
  }


}
