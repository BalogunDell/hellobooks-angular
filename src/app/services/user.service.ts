import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';
@Injectable()
export class UserService extends BaseService {

  loginUser(userObject: object): Observable<any>  {
    return this.http.post(`${this.baseApi}/users/signin`, userObject)
    .do(response => response)
    .catch(this.handleHttpErrorResponse);
  }

  getUser() {
   const userId = this.authService.decodeToken().id;
   return this.http.get(`${this.baseApi}/users/${userId}`, this.setHeaders())
    .do(response => response)
    .catch(this.handleHttpErrorResponse);

  }
}
