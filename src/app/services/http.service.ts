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



  getProducts(){
    let url = "https://cintech-springboot-back-end.azurewebsites.net/all/getProducts";
    return this.http.get(url);
  }

  getProductList(ordering: string, search?: string): Observable<APIResponse<Product>>{
    let params = new HttpParams().set('ordering', ordering);

    if(search){
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Product>>(`${env.BASE_URL}/products`, {
      params:params
    });

  }

  getItemList(listsearch?: string): Observable<APIResponse<Product>>{
    let params = new HttpParams();

    if(listsearch){
      params = new HttpParams().set('listSearch', listsearch);
    }

    return this.http.get<APIResponse<Product>>(`${env.BASE_URL}/items`, {
      params : params
    });
  }

}
