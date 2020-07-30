import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../concrete/store';
import { Product } from '../concrete/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProductByStore(request : Store){
       return this.http.post<Product[]>("http://localhost:8080/api/store/products",request);
  }
}
