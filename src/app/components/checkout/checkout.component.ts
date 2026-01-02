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
      <div class="form-group">
        <label>Full Name:</label>
        <input type="text" name="name" [(ngModel)]="name" #nameField="ngModel" required minlength="3" placeholder="(minimum 3 characters)" />
        <div *ngIf="nameField.invalid && nameField.dirty" class="error-msg">
          Please enter a valid name (at least 3 characters).
        </div>
      </div>

      <div class="form-group">
        <label>Address:</label>
        <input type="text" name="address" [(ngModel)]="address" #addressField="ngModel" required minlength="6" placeholder="(minimum 6 characters)" />
        <div *ngIf="addressField.invalid && addressField.dirty" class="error-msg">
          Address is too short.
        </div>
      </div>

      <div class="form-group">
        <label>Credit Card Number:</label>
        <input type="text" name="payment" [(ngModel)]="payment" #cardField="ngModel" required minlength="16" maxlength="16" pattern="^[0-9]*$" placeholder="(16 digits)" />
        <div *ngIf="cardField.invalid && cardField.dirty" class="error-msg">
          Please enter a valid 16-digit card number.
        </div>
      </div>

      <button type="submit" [disabled]="checkoutForm.invalid">Place Order</button>
    </form>
  `,
  styles: [`
    .error-msg { color: red; font-size: 0.8rem; margin-top: 5px; }
    .form-group { margin-bottom: 15px; }
    input.ng-invalid.ng-dirty { border: 1px solid red; }
  `]
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
