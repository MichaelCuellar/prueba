import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookShopService {
  url: string = environment.url_Base;
  constructor(private http: HttpClient) { }

  getIndex(): Observable<any> {
    return this.http.get(this.url + '/book');
  }

  getLogin(basic: string): Observable<any> {
    const options = {
      headers : new HttpHeaders().append('basic', basic)
    };
    return this.http.get(this.url + '/login', options);
  }
}
