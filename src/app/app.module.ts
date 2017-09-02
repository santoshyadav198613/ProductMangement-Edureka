import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';

import { API_CONFIG, APP_CONFIG } from './service/apiProvider/app.apiconfig';
import { AppConfig } from './service/apiProvider/IAppConfig';
import { ProductService } from './service/product/product.service';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    OrderModule,
    RoutingModule
  ],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: APP_CONFIG, useValue: API_CONFIG }, LoginService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// angular.module('').values('dfdsfds');