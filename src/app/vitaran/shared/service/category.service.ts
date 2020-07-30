import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private selectCategory : BehaviorSubject<Category> = new BehaviorSubject<Category>(null);
  public selectCategory$ : Observable<Category> = this.selectCategory.asObservable();

  public getCategory(){
    return this.http.get<Category[]>("http://localhost:8080/api/categories");
  }

  public setCategory(category : Category){
      this.selectCategory.next(category);
  }
}
