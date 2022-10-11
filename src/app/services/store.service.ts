import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
//decorador
@Injectable({
  providedIn: 'root',
})
//como debe de comportarce este
export class StoreService {
  private myShoppingCart: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }
  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
