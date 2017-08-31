import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren, DoCheck
} from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';

import { ProductService } from '../service/product/product.service';
import { Product } from '../service/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit, DoCheck {
  product = new Product();
  constructor(private _productService: ProductService) { }

  ngOnInit() {

  }

  ngDoCheck() {

  }

  submit() {
    console.log(this.product);
    this.product = new Product();
  }


}
