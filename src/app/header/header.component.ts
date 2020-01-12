import { Component, OnInit } from '@angular/core';
import { Book } from './../Book';
import { BookService } from './../book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Book API Response ';
      books: Book[];
      productsCount = 0;
      constructor(private bookService: BookService) {}

      ngOnInit() {
        this
          .bookService
          .getBook()
          .subscribe((data: Book[]) => {
            this.books = data;
            console.log('data BGS ...........urldata BGS', data);
        });

        this.bookService.getProductsCount().subscribe(data => {
            this.productsCount = data;
        });
    }

}
