import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
