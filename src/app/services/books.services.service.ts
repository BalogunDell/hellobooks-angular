import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BooksService {
  constructor( private http: Http
  ) { }
  private baseApi = 'http://localhost:3003/api/v1';
  getTrendingBooks(): Observable<any>  {
    return this.http.get(`${this.baseApi}/trendingbooks`)
    .map((response) => response.json());
  }
}
