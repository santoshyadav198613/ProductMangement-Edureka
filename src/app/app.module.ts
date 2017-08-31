import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { API_CONFIG, APP_CONFIG } from './service/apiProvider/app.apiconfig';
import { AppConfig } from './service/apiProvider/IAppConfig';
import { ProductService } from './service/product/product.service';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    OrderComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'order', component: OrderComponent },
      { path: 'product', component: ProductComponent },
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: APP_CONFIG, useValue: API_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// angular.module('').values('dfdsfds');