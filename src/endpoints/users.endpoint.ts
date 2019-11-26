import {Endpoint, ListOptions, RelationListOptions} from '@mathrix-education/iridium';
import {User} from '../models/user';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../models/card';
import {Product} from '../models/product';
import {Purchase} from '../models/purchase';
import {Subscription} from '../models/subscription';
import {Create} from '@mathrix-education/iridium';
import {BaseUrl} from '@mathrix-education/iridium';

/**
 * /users endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class UsersEndpoint extends Endpoint<User> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'users');
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
    return this.defaultCreate(user);
  }

  /**
   * GET /users/{userId}
   * @param userId The user id.
   * @param options The options.
   */
  read(userId: number, options?: ListOptions<User>) {
    return this.defaultRead(userId, options);
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
   * DELETE /users/{userId}
   * @param userId The user id.
   */
  delete(userId: number) {
    return this.defaultDelete(userId);
  }

  /**
   * DELETE /users/{userId}/cache
   * @param userId The user id.
   */
  deleteCache(userId: number) {
    return this.http.delete(`${this.url}/${userId}/cache`);
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
   * @param options The relation list options.
   */
  listPurchases(userId: number, options?: RelationListOptions<Purchase>) {
    return this.defaultRelationList<Purchase>(userId, 'purchases', options);
  }

  /**
   * GET /users/{userId}/subscriptions
   * @param userId The user id.
   * @param options The relation list options.
   */
  listSubscriptions(userId: number, options?: RelationListOptions<Subscription>) {
    return this.defaultRelationList<Subscription>(userId, 'subscriptions', options);
  }
}
