import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/service/category.service';
import { Category } from '../../shared/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss']
})
export class ShopCategoryComponent implements OnInit {

  public categories : Category[];

  constructor(public categoryService : CategoryService,
    public route : Router) { }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(x=>{
          this.categories = x;
    });
  }

  public goTo(category : Category) : void{
      this.categoryService.setCategory(category);
      this.route.navigateByUrl("/store");
  }

}
