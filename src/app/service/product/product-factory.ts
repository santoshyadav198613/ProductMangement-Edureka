// import { ProductService } from './product.service';
// import { LoginService } from '../login/login.service';
// import { Inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { APP_CONFIG } from '../apiProvider/app.apiconfig';
// import { AppConfig } from '../apiProvider/IAppConfig';


// export function productFactory(loginService: LoginService, http: HttpClient,
//     @Inject(APP_CONFIG) config: AppConfig) {
//     console.log('logeedin' + loginService.isLoggedIn)
//     return new ProductService(loginService.isLoggedIn, http, config);
// }

// export let productServiceFactory = {
//     provide: ProductService,
//     useFactory: productFactory,
//     deps: [LoginService]
// };
