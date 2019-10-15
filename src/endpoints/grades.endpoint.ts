import {Endpoint} from '../lib/endpoints/endpoint';
import {Grade} from '../models/grade';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';

/**
 * /grades endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class GradesEndpoint extends Endpoint<Grade> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(
      http,
      config.baseUrl,
      'grades',
      new DefaultAdapter<Grade>()
    );
  }

  /**
   * GET /grades
   * List the grades.
   */
  list() {
    return this.defaultList();
  }
}
