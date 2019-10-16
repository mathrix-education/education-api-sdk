import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {Vote, VoteValue} from '../models/vote';
import {Observable} from 'rxjs';
import {DataResponse} from '../lib/responses/data.response';

export class VotesEndpoint extends Endpoint<Vote> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'votes');
  }

  /**
   * POST /vote/comment/{commentId}
   * @param commentId The comment id.
   * @param value The vote value.
   */
  create(commentId: string, value: VoteValue): Observable<DataResponse<Vote>> {
    return this.http.post<DataResponse<Vote>>(`${this.url}/comment/${commentId}`, {value});
  }

  /**
   * DELETE /votes/comment/commentId
   * @param commendId The comment id.
   */
  delete(commendId: number) {
    return this.http.delete(`${this.url}/comment/${commendId}`);
  }
}
