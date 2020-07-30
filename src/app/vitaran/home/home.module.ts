import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HeaderComponent, ShopCategoryComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
