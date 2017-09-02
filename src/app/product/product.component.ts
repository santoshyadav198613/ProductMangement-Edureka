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
  products: Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  ngDoCheck() {

  }

  submit() {
    console.log(this.product);
    this.product = new Product();
  }


}
