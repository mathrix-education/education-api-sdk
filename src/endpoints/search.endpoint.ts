import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {Search} from '../models/search';
import {Endpoint} from '../lib/endpoints/endpoint';
import {DataResponse} from '../lib/responses/data.response';

export class SearchEndpoint extends Endpoint<Search> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'search');
  }

  /**
   * Search for query string into chapter names and videos.
   * GET /modules
   * @param gradeId The grade id.
   * @param query The query string.
   */
  search(gradeId: number, query: string) {
    return this.http.get<DataResponse<Search>>(`${this.url}/${gradeId}/${query}`);
  }
}
