import { ProductCategory } from './ProductCategory';
import { Ingredient } from './Ingredient';

export interface Product {
  category: ProductCategory;
  productName: string;
  price: number;
  ingredients: Array<Ingredient>;
}
