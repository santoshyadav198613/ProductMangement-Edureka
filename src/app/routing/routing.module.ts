import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'product', loadChildren: '../product/product.module#ProductModule' },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
