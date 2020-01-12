import { Component, OnInit } from '@angular/core';
import { Book } from './../Book';
import { BookService } from './../book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  title = 'Book API Response ';
  books: Book[];
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this
      .bookService
      .getBook()
      .subscribe((data: Book[]) => {
        this.books = data;
        console.log('FilterComponentComponent ...........FilterComponentComponent', data);
    });
}

addProdutToCart(product) {
  this.bookService.addProduct(product);
}

}
