// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  private cart: CartItem[] = [];

  addToCart(product: Product, quantity: number) {
    const item = this.cart.find(i => i.product.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
    this.cartSubject.next([...this.cart]);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(i => i.product.id !== productId);
    this.cartSubject.next([...this.cart]);
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next([...this.cart]);
    }
  }

  getTotal(): number {
    return this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next([...this.cart]);
  }
}
