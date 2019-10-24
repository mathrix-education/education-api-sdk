import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {Plan} from '../models/plan';
import {EducationAPISDKConfig} from '../education-api-sdk.config';

export class PlansEndpoint extends Endpoint<Plan> {
  constructor(http: HttpClient, config: EducationAPISDKConfig) {
    super(http, config, 'plans');
  }

  /**
   * GET /plans
   * List the plans.
   */
  list() {
    return this.defaultList();
  }
}
