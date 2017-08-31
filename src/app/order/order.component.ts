import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidateMonth } from '../customValidator/monthvalidator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this._fb.group({
      firstName: ['test', Validators.required],
      lastName: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      qty: ['', Validators.required],
      address: this._fb.group({
        addressLine1: ['', Validators.required],
        addressLine2: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      cards: this._fb.array([
        this.buildForm()
      ])
    });

  }


  buildForm() {
    return this._fb.group({
      cardNumber: ['', Validators.required],
      month: ['', Validators.required, ValidateMonth],
      year: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  addCard() {
    let cardControl = <FormArray>this.orderForm.controls['cards'];
    cardControl.push(this.buildForm());
  }

  removeCard(i: number) {
    let cardControl = <FormArray>this.orderForm.controls['cards'];
    cardControl.removeAt(i);
  }

  submit() {
    console.log(this.orderForm.value);
    this.orderForm.reset();
  }

}
