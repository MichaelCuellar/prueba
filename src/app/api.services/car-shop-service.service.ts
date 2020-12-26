import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SaleBookDto} from '../commons/domain/saleBookDto';
import {CarShopDto} from '../commons/domain/carShopDto';

@Injectable({
  providedIn: 'root'
})
export class CarShopServiceService {

  url: string = environment.url_Base;
  constructor(private http: HttpClient) { }

  getCarShop(basic: string): Observable<any> {
    const options = {
      headers : new HttpHeaders().append('basic', basic)
    };
    return this.http.get(this.url + '/carShop', options);
  }

  addCarShop(basic: string, addCarShopDto: SaleBookDto): Observable<any> {
    const options = {
      headers : new HttpHeaders().append('basic', basic)
    };
    return this.http.post(this.url + '/addCarShop', addCarShopDto, options);
  }

  deleteDetailCar(id: number): Observable<any> {
    return this.http.delete(this.url + '/deleteDetail/' + id);
  }

  deleteCarShop(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  doingSale(basic: string, carShop: CarShopDto[]): Observable<any> {
    const options = {
      headers : new HttpHeaders().append('basic', basic)
    };
    return this.http.post(this.url + '/sale', carShop, options);
  }
}
