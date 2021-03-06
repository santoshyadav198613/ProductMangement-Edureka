import { Component, Inject } from '@angular/core';
import { ProductService } from './service/product/product.service';
import { APP_CONFIG } from './service/apiProvider/app.apiconfig';
import { AppConfig } from './service/apiProvider/IAppConfig';

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

  constructor() {

  }

  toggle() {

    this.isVisible = !this.isVisible;
  }
}
