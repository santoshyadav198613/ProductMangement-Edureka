import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

import { API_CONFIG, APP_CONFIG } from './service/apiProvider/app.apiconfig';
import { AppConfig } from './service/apiProvider/IAppConfig';
import { ProductService } from './service/product/product.service';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/guard/auth.guard';
import { PostComponent } from './post/post.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './service/httpinterceptor/api-interceptor.service';
import { productServiceFactory } from './service/product/product-factory';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    OrderModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  { provide: APP_CONFIG, useValue: API_CONFIG }, LoginService, AuthGuard,
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// angular.module('').values('dfdsfds');