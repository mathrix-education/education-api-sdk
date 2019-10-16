import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {SDKConfig} from '../education-api-sdk.module';
import {Plan} from '../models/plan';

export class PlansEndpoint extends Endpoint<Plan> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'plans');
  }

  /**
   * GET /plans
   * List the plans.
   */
  list() {
    return this.defaultList();
  }
}
