import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/service/store.service';
import { Category } from '../shared/category';
import { CategoryService } from '../shared/service/category.service';
import { Store } from '../shared/concrete/store';
import { Router } from '@angular/router';
import { ProductService } from '../shared/service/product.service';
import { Product } from '../shared/concrete/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public selectedCategory : Category;
  public stores: Store[];
  public products: Product[];
  public isProduct: boolean = false;
  public selectedStore: Store;

  constructor(private storeService : StoreService,
    private categoryService : CategoryService,
    private route : Router,
    private productService : ProductService) { 
      this.categoryService.selectCategory$.subscribe(category => {
        this.selectedCategory = category;
      });
  }

  ngOnInit() {
      this.storeService.getStoreByCategory(this.selectedCategory).subscribe(
        stores =>{
        this.stores = stores;
      },
      error =>{
        this.route.navigateByUrl("/home");
      }
      );
  }

  public goTo(store : Store) : void {
    this.selectedStore = store;
    this.productService.getProductByStore(store).subscribe(products => {
        this.products = products;
        this.isProduct = true;
    },
    error=>{
      this.isProduct = false;
    });
  }

}
