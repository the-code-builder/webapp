import { Component, OnInit } from '@angular/core';


import { products } from '../list';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  list = products;

  constructor() { }

  ngOnInit() {
  }

}
