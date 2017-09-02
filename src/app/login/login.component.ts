import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

import { Login } from '../service/login/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  isValidUser: boolean;
  constructor(private loginService: LoginService, private routerService: Router) { }

  ngOnInit() {
  }

  loginUser() {
    let result = this.loginService.login(this.login);
    if (result) {
      this.routerService.navigate(['/order']);
    }
    else {
      this.isValidUser = false;
    }

  }

}
