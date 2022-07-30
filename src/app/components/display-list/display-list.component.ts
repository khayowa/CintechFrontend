import { Component, Inject, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddToListService } from 'src/app/services/add-to-list.service';
import { displayList } from 'src/app/models/displayList';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  clickEventSubscription!: Subscription;
  displaylist!: displayList[];

  //pName! : any;
  //pPrice! : any;
  //pStore! : any;
  
  @Input() prodName! : any;
  @Input() prodPrice! : any;
  @Input() prodStore! : any;

  

  constructor(private addToListService: AddToListService) {
    this.clickEventSubscription = this.addToListService.getClickEvent().subscribe(() => {
      this.appendListItem();
    })
  }


  ngOnInit(): void {
  /*  this.clickEventSubscription = this.addToListService.getClickEvent().subscribe(() => {
      this.appendListItem();
    }) */

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

  }

  removeItem(id:number){
    this.displaylist = this.displaylist.filter((v, i) => i !== id);
  }

  appendListItem(){
    this.displaylist.push({
      name : this.prodName,
      price : this.prodPrice,
      store : this.prodStore
    })

    console.log('function call from another component works ');
  }
}
