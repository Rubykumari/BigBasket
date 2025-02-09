import { Component } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoryList$: Observable<any>
  constructor(
    private prodService: ProductService
  ){
    this.categoryList$ = this.prodService.getCategory().pipe(
      map((item:any)=>{
        return item.data;
      }));
  }
}
