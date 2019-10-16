import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {Vote, VoteValue} from '../models/vote';

export class CommentsEndpoint extends Endpoint<Vote> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'votes');
  }

  create(commentId: number, value: VoteValue) {
    return this.defaultCreate({value, comment_id: commentId});
  }

  delete(commendId: number) {
    return this.defaultDelete(commendId);
  }
}
