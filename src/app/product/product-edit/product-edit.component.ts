import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Product } from '../../service/product/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(public dialogRef: MdDialogRef<ProductEditComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.product = this.data.product;
  }

  save() {
    this.dialogRef.close(this.product);
  }

}
