import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-by-product',
  templateUrl: './filter-by-product.component.html',
  styleUrls: ['./filter-by-product.component.css']
})
export class FilterByProductComponent implements OnInit {

  public filterProduct!: string;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
