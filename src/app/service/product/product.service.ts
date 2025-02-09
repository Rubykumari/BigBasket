import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient,) { }

  getCategory() {
    return this.httpClient.get(Constant.API_COMMON_POINT + 'GetAllCategory');
  }
  createProd(prodObj:any) {
    return this.httpClient.post(Constant.API_COMMON_POINT + 'CreateProduct', prodObj)
  }
  getAllProds(){
    return this.httpClient.get(Constant.API_COMMON_POINT+ 'GetAllProducts');
  }
  upDateProductService(updatedProdObj:any){
    return this.httpClient.post(Constant.API_COMMON_POINT + 'UpdateProduct', updatedProdObj)
  }
  deleteProductService(Id: number){
    return this.httpClient.get(Constant.API_COMMON_POINT + 'DeleteProductById?id=' + Id)
  }
}
