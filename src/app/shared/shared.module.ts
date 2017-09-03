import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomcurrencyPipe } from '../common/customcurrency.pipe';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CustomcurrencyPipe],
  exports: [FormsModule, ReactiveFormsModule, CustomcurrencyPipe, HttpClientModule]
})
export class SharedModule { }
