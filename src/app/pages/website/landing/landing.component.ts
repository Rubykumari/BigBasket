import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductService } from '../../../service/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  productList: Observable<any>;
  cateList: Observable<any>;
  prodByCateList:any[]=[];
constructor(
  private prodService: ProductService,
  private router: Router
){
  this.productList = this.prodService.getAllProds().pipe(map((res:any)=>{
    return res.data;
  }));
  this.cateList = this.prodService.getCategory().pipe(map((res:any)=>{
    return res.data;
  }))
}
navigateToProdPage(id:number){
  // this.prodByCateList = this.prodService.getProdByCategory(catId).subscribe(()=>{

  // })

  // debugger;
   this.router.navigate(['/allProds', id])
}
}
