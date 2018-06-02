import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable()
export class BooksService extends BaseService {

  /**
   *This fetches trending books
   *
   * @returns {Observable<any>}
   *
   * @memberof BooksService
   */
  getTrendingBooks(): Observable<any>  {
    return this.http.get(`${this.baseApi}/trendingbooks`)
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

  /**
  * This fetches all books
  * in the library
  *
  * @returns {Observable<any>}
  *
  * @memberof BooksService
  */
  getAllBooks(): Observable<any> {
    return this.http.get(`${this.baseApi}/books`, this.setHeaders())
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

  /**
  * This fetches a single book
  *
  * @param {number} bookId
  *
  * @returns {Observable<any>}
  *
  * @memberof BooksService
  */
 getBook(bookId): Observable<any> {
  return this.http.get(`${this.baseApi}/users/${this.getUserId()}/books/${bookId}`,
  this.setHeaders())
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
}

  /**
  * This fetches a users borrowed books
  *
  * @returns {Observable<any>}
  *
  * @memberof BooksService
  */
  getBorrowedBooks() {
    return this.http.get(`${this.baseApi}/users/${this.getUserId()}/books`,
    this.setHeaders())
      .do(response => response)
      .catch(this.handleHttpErrorResponse);
  }

  /**
  * This function allows a user to borrow a book
  *
  * @returns {Observable<object>}
  *
  * @memberof BooksService
  */
  borrowBook(bookId: number): Observable<any> {
    return this.http.post(`${this.baseApi}/users/${this.getUserId()}/books/`,
      {bookId},
      this.setHeaders()
    ).do(response => response)
      .catch(this.handleHttpErrorResponse);
  }
}
