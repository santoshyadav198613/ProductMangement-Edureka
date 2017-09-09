import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../service/product/product';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductlistComponent implements OnInit, OnChanges {
  @Input() productList: Product[];
  @Input() title: string;
  @Output() getProduct = new EventEmitter<string>();
  product: Product;
  constructor(public dialog: MdDialog) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change at' + changes);
  }

  ngOnInit() {
    console.log('product List component is loaded');
  }

  // ngDoCheck() {
  //   console.log('do check event is called from child');
  //   console.log(this.productList);
  // }
  openEdit(product: Product) {
    let dialogRef = this.dialog.open(ProductEditComponent, {
      data: {
        product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.product = result;
    });
  }


  getProducts() {
    this.getProduct.emit('hello from product List');
  }

}
