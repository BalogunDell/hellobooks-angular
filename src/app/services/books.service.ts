import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable()
export class BooksService extends BaseService {

  getTrendingBooks(): Observable<any>  {
    return this.http.get(`${this.baseApi}/trendingbooks`)
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.baseApi}/books`, this.setHeaders())
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }
}
