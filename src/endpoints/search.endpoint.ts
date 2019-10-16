import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {Search} from '../models/search';
import {Endpoint} from '../lib/endpoints/endpoint';
import {Observable} from 'rxjs';
import {DataResponse} from '../lib/responses/data.response';

export class SearchEndpoint extends Endpoint<Search> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'search');
  }

  /**
   * GET /modules
   * List the modules.
   */
  search(gradeId: number): Observable<DataResponse<Search>> {
    return this.defaultList(gradeId, ' ', {});
  }
}
