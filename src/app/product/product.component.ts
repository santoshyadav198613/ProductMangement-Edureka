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
  providers : []
})
export class ProductComponent implements OnInit, DoCheck {
  products: Product[];
  title: string = 'Product Details';
  product: string;
  @ViewChild(ProductlistComponent)
  productListComponent: ProductlistComponent;
  @ViewChildren(ProductlistComponent)
  productListComp: QueryList<ProductlistComponent>;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    console.log('product component is loaded');
    this.products = this._productService.getProducts();
  }


  getProduct() {
    this._productService.addProduct();
    this.productListComponent.getProducts();
    this.productListComp.forEach((data) => data.getProducts());
  }

  ngDoCheck() {
    console.log('do check event is called from parent');
    console.log(this.product);
  }

  getProductFromChild(product: string) {
    this.product = product;
  }

}
