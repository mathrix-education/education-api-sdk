import {Endpoint} from '../lib/endpoints/endpoint';
import {Notion} from '../models/notion';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {CreateOptions} from '../lib/options/create-options';
import {UpdateOptions} from '../lib/options/update-options';
import {Chapter} from "../models/chapter";

export class NotionsEndpoint extends Endpoint<Notion> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(
      http,
      config.baseUrl,
      'notions',
      new DefaultAdapter<Notion>()
    );
  }

  /**
   * GET /notions
   * List the notions.
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /notions
   * @param notion The notion model.
   * @param options The create notion request options.
   */
  create(notion: Notion, options: CreateOptions<Notion>) {
    return this.defaultCreate(notion, options);
  }

  /**
   * GET /notions/{notionId}
   * @param notionId The notion id.
   */
  read(notionId: number) {
    return this.defaultRead(notionId);
  }

  /**
   * PATCH /notions/{notionId}
   * @param notionId The notion id.
   * @param notion The notion model.
   */
  update(notionId: number, notion: Notion) {
    return this.defaultUpdate(notionId, notion);
  }

  /**
   * DELETE /notions/notionId
   * @param notionId The notion id.
   */
  delete(notionId: number) {
    return this.defaultDelete(notionId);
  }

  /**
   * GET /notions/{notionId}/activities
   * @param notionId the notion id.
   */
  listActivities(notionId: number) {
    return this.defaultRelationList<Chapter>(notionId, 'activities');
  }
}
