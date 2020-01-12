import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  products = [];
  productCount: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }

    url = 'https://api.myjson.com/bins/qzuzi';
    wait(arg0: string, arg1: string) {
        throw new Error('Method not implemented.');
    }

  getBook() {
    return this
    .http
    .get(`${this.url}`);
  }

  addProduct(product) {
      this.products.push(product);
      this.productCount.next(this.products.length);
  }

  getProducts() {
      return this.products;
  }

  getProductsCount(): Observable<number> {
    return this.productCount;
}
}
