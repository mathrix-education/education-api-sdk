import {Endpoint} from '../lib/endpoints/endpoint';
import {Notion} from '../models/notion';
import {HttpClient} from '@angular/common/http';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {Chapter} from '../models/chapter';
import {BaseUrl} from '../education-api-sdk.config';
import {Inject, Injectable} from '@angular/core';

/**
 * /notions endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class NotionsEndpoint extends Endpoint<Notion> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'notions', new DefaultAdapter<Notion>());
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
   */
  create(notion: Notion) {
    return this.defaultCreate(notion);
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
