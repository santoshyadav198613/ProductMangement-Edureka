import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdInputModule, MdDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomcurrencyPipe } from '../common/customcurrency.pipe';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule
  ],
  declarations: [CustomcurrencyPipe],
  exports: [FormsModule,
    ReactiveFormsModule, CustomcurrencyPipe,
    HttpClientModule, MdButtonModule, MdInputModule,
    MdDialogModule]
})
export class SharedModule { }
