import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validator, Validators, FormGroup } from '@angular/forms';

import { Login } from '../service/login/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  isValidUser: boolean;
  loginForm: FormGroup;
  constructor(private loginService: LoginService, private routerService: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginUser() {
    let result = this.loginService.login(this.loginForm.value);
    if (result) {
      this.routerService.navigate(['/order']);
    }
    else {
      this.isValidUser = false;
    }

  }

}
