import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {Subscription} from '../models/subscription';
import {Observable} from 'rxjs';
import {DataResponse} from '../lib/responses/data.response';
import {BaseUrl} from '../education-api-sdk.config';
import {Inject} from '@angular/core';

export class SubscriptionsEndpoint extends Endpoint<Subscription> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, ' subscriptions');
  }


  /**
   * POST /subscriptions
   * @param planId The subscription id.
   * @param token The card token.
   * @param cardId The card id.
   * @param trainingId The training id.
   */
  create(planId: string, token?: string, cardId?: string, trainingId?: number): Observable<DataResponse<Subscription>> {
    const card = token ? {token} : {id: cardId};
    let body = {
      plan: planId,
      card
    };
    if (trainingId) {
      body = {...body, ...{product_id: trainingId}};
    }

    return this.http.post<any>(`${this.url}`, body);
  }

  /** Update the user subscription card, (assuming the subscription is  a valid Stripe subscription or a Braintree subscription)
   * In the case it is an old Braintree Subscription, the subscription is seamlessly migrated into a new Stripe subscription.
   * PATCH /subscriptions/{subscriptionId}/card
   * @param subscriptionId The subscription id.
   * @param cardId The card id.
   * @param token The card token.
   */
  updateCard(subscriptionId: string, cardId?: string, token?: string): Observable<DataResponse<any>> {
    const body = cardId ? {card: {id: cardId}} : {card: {token}};
    return this.http.patch<DataResponse<any>>(`${this.url}${subscriptionId}/card`, body);
  }

  /**
   * GET /subscriptions/{subscriptionId}/invoices
   * @param subscriptionId The subscription id.
   */
  listInvoices(subscriptionId: string) {
    return this.defaultRelationList(subscriptionId, 'invoices');
  }
}
