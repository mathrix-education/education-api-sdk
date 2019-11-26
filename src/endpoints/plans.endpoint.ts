import {BaseUrl, Endpoint} from '@mathrix-education/iridium';
import {HttpClient} from '@angular/common/http';
import {Plan} from '../models/plan';
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
