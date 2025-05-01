import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct(){
    const product ={
      "name": "Wireless Headphones",
      "price": 59.99,
      "description": "High-quality wireless headphones with noise cancellation and long battery life.",
      "image": "https://mockapi.io/images/products/headphones.png"
    }
    


    this.productService.addProduct(product).subscribe()
  }
}
