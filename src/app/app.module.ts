import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { API_CONFIG, APP_CONFIG } from './service/apiProvider/app.apiconfig';
import { AppConfig } from './service/apiProvider/IAppConfig';
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
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: APP_CONFIG, useValue: API_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// angular.module('').values('dfdsfds');