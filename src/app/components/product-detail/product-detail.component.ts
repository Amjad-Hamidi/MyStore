import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  selectedQuantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {
  // 1. مراقبة التغير في الرابط بشكل تفاعلي
  this.route.paramMap.pipe(
    // 2. تحويل الـ ID لنوع Number فور استلامه
    map(params => Number(params.get('id'))),
    // 3. استخدام switchMap لضمان التزامن وإلغاء أي طلب قديم عند الريفرش
    switchMap(id => {
      console.log('Fetching data for ID:', id);
      return this.productService.getProductById(id);
    })
  ).subscribe({
    next: (foundProduct) => {
      // 4. إسناد القيمة للمتغير الذي يقرأ منه الـ HTML
      this.product = foundProduct;
      console.log('Product sync complete:', foundProduct);
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Scientific error caught:', err);
    }
  });
}

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.selectedQuantity);
      alert(`${this.product.name} added to cart!`);
    }
  }
}
