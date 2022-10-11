import { Injectable } from '@angular/core';
//servicio propio de angular para hcer recuest
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  //devolver todos los productos
  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
