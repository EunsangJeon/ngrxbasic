import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static counter = 0;

  getProducts(searchQuery: string): Observable<string[]> {
    const productGenerator = () => `Product ${searchQuery}${ProductService.counter++}`;
    const products = Array.from({length: 5}, productGenerator);

    return of(products).pipe(delay(1000));
  }
}
