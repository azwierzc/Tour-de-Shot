import { Injectable } from '@angular/core';
import {ProductCategory} from '../models/ProductCategory';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  getProductCategory(): Observable<ProductCategory[]> {

    return this.http.get('/local/product-category').pipe(
      map((result: any) => {
        return result;
      })
    );

  }

}
