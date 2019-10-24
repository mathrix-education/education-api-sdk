import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {Plan} from '../models/plan';

export class PlansEndpoint extends Endpoint<Plan> {
  constructor(http: HttpClient) {
    super(http, 'plans');
  }

  /**
   * GET /plans
   * List the plans.
   */
  list() {
    return this.defaultList();
  }
}
