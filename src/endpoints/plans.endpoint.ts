import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {Plan} from '../models/plan';
import {BaseUrl} from '../education-api-sdk.config';
import {Inject, Injectable} from '@angular/core';
/**
 * /plans endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class PlansEndpoint extends Endpoint<Plan> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'plans');
  }

  /**
   * GET /plans
   * List the plans.
   */
  list() {
    return this.defaultList();
  }
}
