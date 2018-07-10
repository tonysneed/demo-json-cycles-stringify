import { Product } from './models/product';
import { Category } from './models/category';

/**
 * JSON.stringify Set tests
 */
describe('JSON.stringify Set', () => {
  it('should throw error with cycles', () => {

    // Create Set with cycles
    const category = new Category(0, 'Food');
    const products = new Set<Product>([
      new Product(0, 'Bacon', 0, category),
      new Product(0, 'Lettuce', 0, category),
      new Product(0, 'Tomatoes', 0, category)]
    );
    category.products = Array.from(products.values()); // Creates cycles

    // JSON.stringify throws TypeError
    const stringifyFunc = () => JSON.stringify(Array.from(products.values()));
    expect(stringifyFunc).toThrowError(TypeError);
  });

  // Create Set without cycles
  it('should work without cycles', () => {
    const category = new Category(0, 'Food');
    const products = new Set<Product>([
      new Product(0, 'Bacon', 0, category),
      new Product(0, 'Lettuce', 0, category),
      new Product(0, 'Tomatoes', 0, category)]
    );
    // category.products = Array.from(products.values()); // Creates cycles

    // JSON.stringify works
    const expected =
      '[{"productId":0,"productName":"Bacon","unitPrice":0,' +
      '"category":{"categoryId":0,"categoryName":"Food","products":[]}},' +
      '{"productId":0,"productName":"Lettuce","unitPrice":0,' +
      '"category":{"categoryId":0,"categoryName":"Food","products":[]}},' +
      '{"productId":0,"productName":"Tomatoes","unitPrice":0,' +
      '"category":{"categoryId":0,"categoryName":"Food","products":[]}}]';
    const serialized = JSON.stringify(Array.from(products.values()));
    expect(serialized).toEqual(expected);
  });
});
