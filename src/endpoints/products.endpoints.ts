import {Endpoint} from '../lib/endpoints/endpoint';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {CreateOptions} from '../lib/options/create-options';
import {Create} from '../lib/adapters/create';

export class ProductsEndpoint extends Endpoint<Product> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'products');
  }

  /**
   * GET /products
   * List the products.
   */
  list() {
    return this.defaultList();
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
   */
  read(productId: number) {
    return this.defaultRead(productId);
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
   * GET /products/{productsId}/recursive
   * @param productId The product id.
   */
  recursive(productId: number) {
    return this.defaultRelationList(productId, 'recursive');
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
