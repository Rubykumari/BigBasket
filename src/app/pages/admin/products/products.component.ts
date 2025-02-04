import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  isNewProductCardOpen: boolean = false;
  prodObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 2147483647,
    "productImageUrl": "",
    "userId": 0
  }
  categoryList: any[] = [];
  constructor(
    private prodService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }
  openAddProd() {
    this.isNewProductCardOpen = true;
  }
  closeAddProd() {
    this.isNewProductCardOpen = false;
  }
  getAllCategory() {
    this.prodService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
      console.log(this.categoryList)
    })
  }
}
