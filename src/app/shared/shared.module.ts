import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomcurrencyPipe } from '../common/customcurrency.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CustomcurrencyPipe],
  exports: [FormsModule, ReactiveFormsModule, CustomcurrencyPipe]
})
export class SharedModule { }
