import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG } from '../apiProvider/app.apiconfig';
import { AppConfig } from '../apiProvider/IAppConfig';


@Injectable()
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Product1', price: 100, imageUrl: 'http://test.com', createdDate: new Date('11-10-1987') },
    { id: 2, name: 'Product2', price: 2000, imageUrl: 'http://test.com', createdDate: new Date('11-10-1987') },
    { id: 3, name: 'Product3', price: 3000, imageUrl: 'http://test.com', createdDate: new Date('11-10-1987') }
  ];
  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig) { }

  getProducts(): Observable<Product[]> {
    let headers = new HttpHeaders().set('token', 'testToken');
    return this.http.get<Product[]>(this.config.apiEndPoint + 'api/product', { headers: headers });
    // return Observable.of(this.products);
  }

  addProduct(product: Product) {
    let headers = new HttpHeaders().set('token', 'testToken');
    return this.http.post(this.config.apiEndPoint + 'api/product', product, { headers: headers });
  }
}
