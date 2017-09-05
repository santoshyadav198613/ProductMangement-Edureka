import { ProductService } from './product.service';
import { LoginService } from '../login/login.service';

export function productFactory(loginService: LoginService) {
    console.log('logeedin' + loginService.isLoggedIn)
    return new ProductService(loginService.isLoggedIn);
}

export let productServiceFactory = {
    provide: ProductService,
    useFactory: productFactory,
    deps: [LoginService]
};
