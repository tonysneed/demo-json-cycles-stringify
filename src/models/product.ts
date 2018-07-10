import { Category } from './category';

export class Product {
  productId: number;
  productName: string;
  unitPrice: number;
  categoryId: number;
  category: Category;

  constructor();
  constructor(productId: number, productName: string, unitPrice: number, category?: Category);
  constructor(productId?: number, productName?: string, unitPrice?: number, category?: Category) {
    this.productId = productId;
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.category = category;
  }
}
