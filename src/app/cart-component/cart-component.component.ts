import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit {

  constructor(private bookService: BookService) { }
  products = [];

  ngOnInit() {
    this.products = this.bookService.getProducts();
  }

}
