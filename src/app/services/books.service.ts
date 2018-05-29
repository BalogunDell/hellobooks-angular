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
  * This fetches a users borrowed books
  *
  * @returns {Observable<any>}
  *
  * @memberof BooksService
  */

  getBorrowedBooks() {
    const userId = this.authService.decodeToken().id;
    return this.http.get(`${this.baseApi}/users/${userId}/books`, this.setHeaders())
      .do(response => response)
      .catch(this.handleHttpErrorResponse);
  }
}
