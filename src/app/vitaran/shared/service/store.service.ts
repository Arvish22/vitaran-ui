import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../concrete/store';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  public getStoreByCategory(request : Category){
    return this.http.post<Store[]>("http://localhost:8080/api/categories",request);
  }
}
