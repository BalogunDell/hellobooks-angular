import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class UserService extends BaseService {

  editProfileUserData = new Subject<object>();
  /**
   * This method creates a new user
   *
   * @param {object} userData
   *
   * @returns {Observable}
   *
   * @memberof UserService
   */
  createUser(userData) {
    return this.http.post(`${this.baseApi}/users/signup`, userData)
      .do(response => response)
      .catch(this.handleHttpErrorResponse);
  }

  /**
   * This method logs a user into the application
   *
   * @param {object} loginDetails
   *
   * @returns {Observable}
   *
   * @memberof UserService
   */
  loginUser(loginDetails: object): Observable<any>  {
    return this.http.post(`${this.baseApi}/users/signin`, loginDetails)
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

   /**
   * This method gets a single user data
   *
   * @param {object} loginDetails
   *
   * @returns {Observable}
   *
   * @memberof UserService
   */
  getUser() {
   return this.http.get(`${this.baseApi}/users/${this.getUserId()}`, this.setHeaders())
    .do(response => response)
    .catch(this.handleHttpErrorResponse);

  }

  updateProfile(newUserData) {
    return this.http.put(`${this.baseApi}/users/${this.getUserId()}`, newUserData, this.setHeaders())
      .do(response => response)
      .catch(this.handleHttpErrorResponse);
  }
}
