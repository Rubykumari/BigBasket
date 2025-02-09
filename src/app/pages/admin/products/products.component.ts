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
  inputObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "userId": 0
  }
  categoryList: any[] = [];
  prodList: any[] = [];
  constructor(
    private prodService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProds();
  }
  openSidePanel() {
    this.isNewProductCardOpen = true;
  }
  closeAddProd() {
    this.isNewProductCardOpen = false;
  }
  getAllCategory() {
    this.prodService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
      console.log(this.categoryList);
    })
  }
  getAllProds() {
    this.prodService.getAllProds().subscribe((res: any) => {
      this.prodList = res.data;
      console.log(this.prodList)
    })
  }
  onSave() {
    if (!this.inputObj.productSku || !this.inputObj.productName || !this.inputObj.categoryId) {
      return alert('SKU, Name & Category fields are mandatory');
    }
    this.prodService.createProd(this.inputObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product created');

      } else {
        alert(res.message);
      }
    });
  }
  onUpdate(){
    if (!this.inputObj.productSku || !this.inputObj.productName || !this.inputObj.categoryId) {
      return alert('SKU, Name & Category fields are mandatory');
    }
    this.prodService.upDateProductService(this.inputObj).subscribe((res: any)=>{
      debugger;
      if (res.result) {
        alert(res.message);
      } else {
        alert(res);
      }
    })
  }
  onEdit(item: any) {
    this.inputObj = item;
    this.openSidePanel();
  }
  onDelete(item: any){
    const isDelete = confirm('Are you sure want to delete ?');
    if(isDelete){
      this.prodService.deleteProductService(item.productId).subscribe((res:any)=>{
        console.log(res);
        if(res.result){
         alert('Product Deleted')
        }
        else{
          alert('Some error occurred')
        }
        })
    }

  }
}
