import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AuthGuard } from '../service/guard/auth.guard';
import { ProductResolveGuard } from '../service/product/product-resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [
        {
          path: '', component: ProductComponent, canActivate: [AuthGuard],
          resolve: {
            productList: ProductResolveGuard
          },
          children: [
            { path: ':id', component: ProductdetailsComponent }
          ]
        }
      ]
    )
  ],
  declarations: [ProductComponent, ProductlistComponent,
    ProductdetailsComponent],
  providers: [ProductResolveGuard]
})
export class ProductModule { }
