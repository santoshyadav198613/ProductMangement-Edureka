import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';

import { ProductService } from './service/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
