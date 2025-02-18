import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../service/product/product.service';

@Component({
  selector: 'app-web-prods',
  imports: [CommonModule],
  templateUrl: './web-prods.component.html',
  styleUrl: './web-prods.component.scss'
})
export class WebProdsComponent {
  productList: Observable<any>;
  constructor(
    private prodService: ProductService,
    private router: Router
  ){
    this.productList = this.prodService.getAllProds().pipe(map((res:any)=>{
      return res.data;
    }));
  }
}
