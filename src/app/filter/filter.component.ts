import { Component, OnInit } from '@angular/core';
import { Book } from './../Book';
import { BookService } from './../book.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

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
