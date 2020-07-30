import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VitaranRoutingModule } from './vitaran-routing.module';
import { HomeModule } from './home/home.module';
import { StoreModule } from './store/store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeModule,
    StoreModule,
    VitaranRoutingModule
  ]
})
export class VitaranModule { }
