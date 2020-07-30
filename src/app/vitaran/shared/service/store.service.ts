import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../concrete/store';
import { Category } from '../category';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private selectedStore : BehaviorSubject<Store> = new BehaviorSubject<Store>(null);
  public selectedStore$ : Observable<Store> = this.selectedStore.asObservable();

  constructor(private http: HttpClient) { }

  public getStoreByCategory(request : Category){
       return this.http.post<Store[]>("http://localhost:8080/api/categoryStore",request);
  }

  public setCategory(store : Store){
    this.selectedStore.next(store);
}
}
