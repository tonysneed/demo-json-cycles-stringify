import { TrackableEntity } from 'trackable-entities';
import { TrackableCategory } from './trackable-category';

export class TrackableProduct extends TrackableEntity {
  productId: number;
  productName: string;
  unitPrice: number;
  categoryId: number;
  category: TrackableCategory;

  constructor();
  constructor(productId: number, productName: string, unitPrice: number, category?: TrackableCategory);
  constructor(productId?: number, productName?: string, unitPrice?: number, category?: TrackableCategory) {
    super();
    this.productId = productId;
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.category = category;
    return super.proxify(this);
  }
}
