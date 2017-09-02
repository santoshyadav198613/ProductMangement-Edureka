import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { AuthGuard } from '../service/guard/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [
        { path: 'order', component: OrderComponent, canActivate: [AuthGuard] }
      ]
    )
  ],
  declarations: [OrderComponent]
})
export class OrderModule { }
