import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LookUpService } from 'src/app/services/look-up.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, private lookupService: LookUpService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.router.navigate([])

    this.lookupService.sendLookEvent(form.value.search);

  }

}
