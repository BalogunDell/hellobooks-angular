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
    return this.http.get(`${this.baseApi}/books`)
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
  return this.http.get(`${this.baseApi}/users/${this.getUserId()}/books/`)
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
  return this.http.get(`${this.baseApi}/users/${this.getUserId()}/books/${bookId}`)
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
}

  /**
  * This function allows a user to borrow a book
  *
  * @param {number} bookId
  *
  * @returns {Observable<object>}
  *
  * @memberof BooksService
  */
  borrowBook(bookId: number): Observable<any> {
    return this.http.post(`${this.baseApi}/users/${this.getUserId()}/books/`,
      {bookId})
      .do(response => response)
      .catch(this.handleHttpErrorResponse);
  }

  /**
  * This function gets all the borrowed books for the admin
  *
  * @returns {Observable<object>}
  *
  * @memberof BooksService
  */
 getAllBorrowedBooks(): Observable<any> {
  return this.http.get(`${this.baseApi}/books/borrowedbooks/`)
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

  /**
  * This function deletes a book
  *
  * @returns {Observable<object>}
  *
  * @memberof BooksService
  */
 deleteBook(bookId): Observable<any> {
  return this.http.delete(`${this.baseApi}/books/${bookId}`)
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

   /**
  * This function returns a borrowed book
  *
  * @returns {Observable<object>}
  *
  * @memberof BooksService
  */
 returnBook(bookId): Observable<any> {
  return this.http.put(`${this.baseApi}/users/${this.getUserId()}/books`,
    {bookId})
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

}
