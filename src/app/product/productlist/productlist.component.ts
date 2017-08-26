import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Product } from '../../service/product/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnChanges, DoCheck {
  @Input() productList: Product[];
  @Input() title: string;
  @Output() getProduct = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('product List component is loaded');
  }

  ngDoCheck() {
    console.log('do check event is called from child');
    console.log(this.productList);
  }


  getProducts() {
    this.getProduct.emit('hello from product List');
  }

}
