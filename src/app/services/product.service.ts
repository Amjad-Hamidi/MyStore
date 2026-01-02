import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (this.products.length > 0) {
      return new Observable(observer => {
        observer.next(this.products);
        observer.complete();
      });
    }

    return this.http.get<Product[]>('/assets/data.json').pipe(
      tap(data => this.products = data)
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    // إذا البيانات موجودة
    if (this.products.length > 0) {
      return new Observable(observer => {
        observer.next(this.products.find(p => p.id === id));
        observer.complete();
      });
    }

    // إذا الصفحة تم فتحها مباشرة
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
