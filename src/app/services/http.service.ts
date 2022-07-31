import { APIResponse, Product } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get(env.url);
  }

  getRandom(){
    let params = new HttpParams().set('','');
    return this.http.get(env.RAND_URL, {
      params:params
    });
  }

  getWoolies(){

    let params = new HttpParams().set('selectWool','');
    return this.http.get(env.woolP_URL, {
      params:params
    });
  }

  getPickus(){

    let params = new HttpParams().set('selectPnP','');

    return this.http.get(env.pickP_URL, {
      params:params
    });
  }

  getByFilter(directive: string,product?: string){
    let params = new HttpParams();

    if(product){
      params = new HttpParams().set( directive, product)
    }

    return this.http.get(env.SEARCH_URL+product, {
      params:params
    });
  }

  getByTitle(titleSearch?: string){
    let params = new HttpParams();

    if(titleSearch){
      params = new HttpParams().set('titleSearch', titleSearch)
    }

    return this.http.get(env.SEARCH_URL+titleSearch, {
      params:params
    });
  }

  getBySearch(search?: string){
    //let params = new HttpParams();

   // if(search){
   //   params = new HttpParams().set('(outputDisplay:search/', search)
   // }
    return this.http.get(env.SEARCH_URL+search);
  }


  sendShoppingList(email: any, shoplist: any){
    this.http.post(env.POST_URL+email, shoplist).subscribe();
  }

  /*getProducts(): Observable<APIResponse<Product>>{
    let params = new HttpParams();
    return this.http.get<APIResponse<Product>>(`${env.url}`, {
      params:params
    });
  }*/

}
