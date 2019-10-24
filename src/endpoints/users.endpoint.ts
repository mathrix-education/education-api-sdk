import {Endpoint} from '../lib/endpoints/endpoint';
import {User} from '../models/user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListOptions} from '../lib/options/list-options';
import {Card} from '../models/card';
import {Product} from '../models/product';
import {Purchase} from '../models/purchase';
import {Subscription} from '../models/subscription';
import {Create} from '../lib/adapters/create';
import {EducationAPISDKConfig} from '../education-api-sdk.config';

/**
 * /users endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class UsersEndpoint extends Endpoint<User> {
  constructor(http: HttpClient, config: EducationAPISDKConfig) {
    super(http, config, 'users');
  }

  /**
   * GET /users
   * @param options The list user request options.
   */
  list(options: ListOptions<User>) {
    return this.defaultList(options);
  }

  /**
   * GET /users
   * @param user The user.
   */
  create(user: Create<User>) {

  }

  /**
   * GET /users/{userId}
   * @param userId The user id.
   */
  read(userId: number) {
    return this.defaultRead(userId, {expand: ['grade']});
  }

  /**
   * PATCH /users/{userId}
   * @param userId The user id.
   * @param model The user.
   */
  update(userId: number, model: User) {
    return this.defaultUpdate(userId, model);
  }

  /**
   * DELETE /users/{userId}/cards
   * @param userId The user id.
   */
  delete(userId: number) {
    return this.defaultDelete(userId);
  }

  /**
   * GET /users/{userId}/cards
   * @param userId The user id.
   */
  listCards(userId: number) {
    return this.defaultRelationList<Card>(userId, 'cards');
  }

  /**
   * GET /users/{userId}/products
   * @param userId The user id.
   */
  listProducts(userId: number) {
    return this.defaultRelationList<Product>(userId, 'products');
  }

  /**
   * GET /users/{userId}/purchases
   * @param userId The user id.
   */
  listPurchases(userId: number) {
    return this.defaultRelationList<Purchase>(userId, 'purchases');
  }

  /**
   * GET /users/{userId}/subscriptions
   * @param userId The user id.
   */
  listSubscriptions(userId: number) {
    return this.defaultRelationList<Subscription>(userId, 'subscriptions');
  }
}
