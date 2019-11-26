import {BaseUrl, Create, Endpoint, ListOptions, ReadOptions} from '@mathrix-education/iridium';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';

/**
 * /products endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductsEndpoint extends Endpoint<Product> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'products');
  }

  /**
   * GET /products
   * List the products.
   */
  list(options?: ListOptions<Product>) {
    return this.defaultList(options);
  }

  /**
   * POST /products
   * @param product The product model.
   */
  create(product: Create<Product>) {
    return this.defaultCreate(product);
  }

  /**
   * GET /products/{productId}
   * @param productId The product id.
   * @param options: The read options.
   */
  read(productId: number, options?: ReadOptions<Product>) {
    return this.defaultRead(productId, options);
  }

  /**
   * PATCH /products/{productId}
   * @param productId The product id.
   * @param product The product model.
   */
  update(productId: number, product: Product) {
    return this.defaultUpdate(productId, product);
  }

  /**
   * DELETE /products/productId
   * @param productId The product id.
   */
  delete(productId: number) {
    return this.defaultDelete(productId);
  }

  /**
   * GET /products/buyable/type/${type}
   * @param type: The product type.
   */
  listBuyable(type) {
    return this.defaultList({
      filters: [
        ['buyable', '=', true],
        ['type', '=', type]
      ]
    });
  }

  /**
   * GET /products/buyable/type/${type}
   * @param slug: The product slug.
   */
  listBySlug(slug: string) {
    return this.defaultList({filters: [['slug', '=', slug]]});
  }

  /**
   * GET /products/type/${type}
   * @param type: The product type.
   */
  listByType(type) {
    return this.defaultList({filters: [['type', '=', type]]});
  }

  /**
   * GET /products/{productId}/items
   * @param productId The product id.
   */
  related(productId: number) {
    return this.defaultRelationList(productId, 'items');
  }

  /**
   * PATCH /products/{productId}/items
   * @param productId The product id.
   * @param childrenProductsIds The children products ids.
   */
  setRelated(productId: number, childrenProductsIds: number[]) {
    return this.defaultRelationReorder(productId, 'items', childrenProductsIds);
  }

}
