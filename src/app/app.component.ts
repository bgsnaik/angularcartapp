import { Book } from './Book';
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Santhosh Naik B G : Cart App ';
//   imgs = 'https://via.placeholder.com/600/92c952';
public search: any = '';
// locked: any[] = [];

  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this
      .bookService
      .getBook()
      .subscribe((data: Book[]) => {
        this.books = data;
        console.log('data...........urldata', data);
    });
}
}
