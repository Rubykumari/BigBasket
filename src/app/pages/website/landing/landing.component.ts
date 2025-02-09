import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductService } from '../../../service/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  productList$: Observable<any>
constructor(private prodService: ProductService){
  this.productList$ = this.prodService.getAllProds().pipe(map((res:any)=>{
    return res.data;
  }));
  console.log(this.productList$);
}

}
