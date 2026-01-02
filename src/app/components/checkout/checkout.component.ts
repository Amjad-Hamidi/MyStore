import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Checkout</h2>
    <form #checkoutForm="ngForm" (ngSubmit)="submit()">
      <label>
        Name:
        <input type="text" name="name" [(ngModel)]="name" required minlength="2" />
      </label>
      <label>
        Address:
        <input type="text" name="address" [(ngModel)]="address" required minlength="5" />
      </label>
      <label>
        Payment Info:
        <input type="text" name="payment" [(ngModel)]="payment" required minlength="5" />
      </label>
      <button type="submit" [disabled]="checkoutForm.invalid">Place Order</button>
    </form>
  `,
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  name = '';
  address = '';
  payment = '';

  constructor(private cartService: CartService, private router: Router) {}

  submit() {
    this.cartService.clearCart();
    this.router.navigate(['/confirmation']);
  }
}
