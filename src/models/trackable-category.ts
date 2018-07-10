import { TrackableEntity } from 'trackable-entities';
import { TrackableProduct } from './trackable-product';

export class TrackableCategory extends TrackableEntity {
    categoryId: number;
    categoryName: string;
    products: TrackableProduct[]; // Can cause cycles

    constructor();
    constructor(categoryId: number, categoryName: string, ...products: TrackableProduct[]);
    constructor(categoryId?: number, categoryName?: string, ...products: TrackableProduct[]) {
      super();
      this.categoryId = categoryId;
      this.categoryName = categoryName;
      this.products = products;
      return super.proxify(this);
    }
  }
