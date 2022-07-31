import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.css']
})
export class MakeListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMakeList(form: NgForm ){
    this.router.navigate(['titleSearch', form.value.titleSearch])
  }

}
