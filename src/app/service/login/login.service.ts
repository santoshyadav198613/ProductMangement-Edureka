import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(login: Login): boolean {
    if (login.userName === 'Test' && login.password === 'test') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

}
