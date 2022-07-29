import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-store',
  templateUrl: './select-store.component.html',
  styleUrls: ['./select-store.component.css']
})
export class SelectStoreComponent implements OnInit {

  public store!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectWool(){
    this.router.navigate(['selectWool'])
  }

  selectPick(){
    this.router.navigate(['selectPnP'])
  }

  
}
