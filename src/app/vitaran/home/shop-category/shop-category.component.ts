import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/service/category.service';
import { Category } from '../../shared/category';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss']
})
export class ShopCategoryComponent implements OnInit {

  public categories : Category[];

  constructor(public categoryService : CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(x=>{
          this.categories = x;
    });
  }

}
