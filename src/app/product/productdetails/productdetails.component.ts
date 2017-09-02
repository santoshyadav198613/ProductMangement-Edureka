import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() title: string;
  productId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => this.productId = + data.get('id'));
  }

}
