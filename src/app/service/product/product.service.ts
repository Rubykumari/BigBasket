import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient,) { }

  getCategory(){
    return this.httpClient.get(Constant.API_COMMON_POINT + 'GetAllCategory');
  }
}
