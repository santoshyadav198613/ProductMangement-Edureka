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
import { ActivatedRoute } from '@angular/router';
// import { productServiceFactory } from '../service/product/product-factory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit, DoCheck {
  product = new Product();
  products: Product[];
  userName: string;
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => this.products = data['productList']);
    this.userName = localStorage.getItem('userName');
    console.log(localStorage);
  }

  ngDoCheck() {

  }

  submit() {
    console.log(this.product);
    this._productService.addProduct(this.product).subscribe((data) =>
      console.log(data),
      (err) => console.log(err));
    this.product = new Product();
  }


}
