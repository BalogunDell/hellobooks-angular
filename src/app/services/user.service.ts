import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { environment } from '../../env';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  constructor( private http: Http
  ) { }

  private baseApi = environment.baseApi;

  loginUser(userObject: object): Observable<any>  {
    return this.http.post(`${this.baseApi}/users/signin`, userObject)
    .map((response) => response.json())
    .catch((error) => error.json());
  }

  setUserToken(token) {
    localStorage.setItem('token', token);
  }
}
