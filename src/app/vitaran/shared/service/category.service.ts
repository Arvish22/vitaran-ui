import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategory(){
    return this.http.get<any>("https://secure-meadow-25515.herokuapp.com/api/categories");
  }
}
