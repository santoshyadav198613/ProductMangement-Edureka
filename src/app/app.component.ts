import { Component } from '@angular/core';
import { ProductService } from './service/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'Product Management';
  productManger = 'Employee1';
  isVisible = false;
  
  constructor(private _service: ProductService) {

  }

  toggle() {
    this._service.addProduct();
    this.isVisible = !this.isVisible;
  }
}
