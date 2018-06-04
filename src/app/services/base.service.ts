import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { environment } from '../../env';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { _throw } from 'rxjs/observable/throw';


@Injectable()
export class BaseService {
  protected baseApi = environment.baseApi;
  protected userId;

  constructor(
    protected http: HttpClient,
    protected authService: AuthService,
  ) {}

  /**
   * This function handles any error from api call
   * and it returns the message of the error
   *
   * @param {HttpErrorResponse} error
   *
   * @returns {string} error message
   *
   * @memberof BaseService
   */
  handleHttpErrorResponse(error: HttpErrorResponse) {
     return _throw(error.error.message);
  }

  /**
   * This function gets the user id
   *
   * @returns {number} userId
   *
   * @memberof BaseService
   */
  getUserId(): number {
    this.userId = this.authService.decodeToken().id;
    return this.userId;
  }
}
