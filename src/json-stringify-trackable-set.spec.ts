import { TrackableSet } from 'trackable-entities';
import { TrackableCategory } from './models/trackable-category';
import { TrackableProduct } from './models/trackable-product';

/**
 * JSON.stringify TrackableSet tests
 */
describe('JSON.stringify TrackableSet', () => {
  it('should throw error with cycles', () => {

    // Create Set with cycles
    const category = new TrackableCategory(0, 'Food');
    const products = new TrackableSet<TrackableProduct>(
      new TrackableProduct(0, 'Bacon', 0, category),
      new TrackableProduct(0, 'Lettuce', 0, category),
      new TrackableProduct(0, 'Tomatoes', 0, category)
    );
    category.products = Array.from(products.values()); // Creates cycles

    // JSON.stringify throws TypeError
    const stringifyFunc = () => JSON.stringify(Array.from(products.values()));
    expect(stringifyFunc).toThrowError(TypeError);
  });

  // Create Set without cycles
  it('should work without cycles', () => {
    const category = new TrackableCategory(0, 'Food');
    const products = new TrackableSet<TrackableProduct>(
      new TrackableProduct(0, 'Bacon', 0, category),
      new TrackableProduct(0, 'Lettuce', 0, category),
      new TrackableProduct(0, 'Tomatoes', 0, category)
    );
    // category.products = Array.from(products.values()); // Creates cycles

    // JSON.stringify works
    const expected =
      // tslint:disable-next-line:max-line-length
      '[{"_excludedProperties":{},"_modifyListeners":[],"trackingState":0,"modifiedProperties":{},"_modifyListener":{"_isScalar":false,"observers":[],"closed":false,"isStopped":false,"hasError":false,"thrownError":null},' +
      '"productId":0,"productName":"Bacon","unitPrice":0,"category":{"_excludedProperties":{},"_modifyListeners":[],"trackingState":0,"modifiedProperties":{},"_modifyListener":{"_isScalar":false,"observers":[],"closed":false,' +
      // tslint:disable-next-line:max-line-length
      '"isStopped":false,"hasError":false,"thrownError":null},"categoryId":0,"categoryName":"Food","products":[]}},{"_excludedProperties":{},"_modifyListeners":[],"trackingState":0,"modifiedProperties":{},"_modifyListener":' +
      '{"_isScalar":false,"observers":[],"closed":false,"isStopped":false,"hasError":false,"thrownError":null},"productId":0,"productName":"Lettuce","unitPrice":0,"category":{"_excludedProperties":{},"_modifyListeners":[],' +
      // tslint:disable-next-line:max-line-length
      '"trackingState":0,"modifiedProperties":{},"_modifyListener":{"_isScalar":false,"observers":[],"closed":false,"isStopped":false,"hasError":false,"thrownError":null},"categoryId":0,"categoryName":"Food","products":[]}},{' +
      '"_excludedProperties":{},"_modifyListeners":[],"trackingState":0,"modifiedProperties":{},"_modifyListener":{"_isScalar":false,"observers":[],"closed":false,"isStopped":false,"hasError":false,"thrownError":null},"productId":0,' +
      // tslint:disable-next-line:max-line-length
      '"productName":"Tomatoes","unitPrice":0,"category":{"_excludedProperties":{},"_modifyListeners":[],"trackingState":0,"modifiedProperties":{},"_modifyListener":{"_isScalar":false,"observers":[],"closed":false,"isStopped":false,' +
      '"hasError":false,"thrownError":null},"categoryId":0,"categoryName":"Food","products":[]}}]';
    const serialized = JSON.stringify(Array.from(products.values()));
    expect(serialized).toEqual(expected);
  });
});
