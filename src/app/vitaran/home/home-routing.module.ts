import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
