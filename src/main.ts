import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { CartComponent } from './app/components/cart/cart.component';
import { CheckoutComponent } from './app/components/checkout/checkout.component';
import { ConfirmationComponent } from './app/components/confirmation/confirmation.component';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch(err => console.error(err));
