import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>Shopping Cart</h2>

    <div *ngIf="cartItems.length === 0">Your cart is empty.</div>

    <div *ngFor="let item of cartItems" class="cart-item">
      <p>{{ item.product.name }} - \${{ item.product.price }} x 
        <input 
          type="number" 
          [(ngModel)]="item.quantity" 
          min="1" 
          (ngModelChange)="updateCart(item)" 
        />
      </p>
      <button (click)="remove(item.product.id)">Remove</button>
    </div>

    <div *ngIf="cartItems.length > 0" class="cart-summary">
      <p>Total: \${{ total }}</p>
      <button routerLink="/checkout">Proceed to Checkout</button>
    </div>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // تعريف المتغيرات مع قيم أولية (Initializers)
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // الاشتراك في الـ Stream الخاص بالسلة عند بدء المكون
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  updateCart(item: CartItem) {
    if (item.quantity > 0) {
      this.cartService.updateQuantity(item.product.id, item.quantity);
      this.calculateTotal();
    }
  }

  remove(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    const productName = item ? item.product.name : 'Item';

    this.cartService.removeFromCart(productId);
    this.calculateTotal();
    
    alert(`${productName} has been removed from your cart.`);
  }

  calculateTotal() {
    this.total = this.cartService.getTotal();
  }
}