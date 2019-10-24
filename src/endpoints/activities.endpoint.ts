import {Endpoint} from '../lib/endpoints/endpoint';
import {Activity} from '../models/activity';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {Module} from '../models/module';
import {RelationListOptions} from '../lib/options/relation-list-options';
import {ReadOptions} from '../lib/options/read-options';
import {UpdateOptions} from '../lib/options/update-options';
import {RelationReorderOptions} from '../lib/options/relation-reorder-options';
import {Create} from '../lib/adapters/create';

/**
 * /activities endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class ActivitiesEndpoint extends Endpoint<Activity> {
  constructor(http: HttpClient, config: EducationAPISDKConfig) {
    super(http, config, 'activities');
  }

  /**
   * GET /activities
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /activities
   * @param activity The activity model.
   */
  create(activity: Create<Activity>) {
    return this.defaultCreate(activity);
  }

  /**
   * GET /activities/{activityId}
   * @param activityId The activity id.
   * @param options The read activity request options.
   */
  read(activityId: number, options: ReadOptions<Activity>) {
    return this.defaultRead(activityId, options);
  }

  /**
   * PATCH /activities/{activityId}
   * @param activityId The activity id.
   * @param activity The activity model.
   * @param options The update activity request options.
   */
  update(activityId: number, activity: Activity, options: UpdateOptions<Activity>) {
    return this.defaultUpdate(activityId, activity, options);
  }

  /**
   * GET /activities/{activityId}/modules
   * @param activityId The activity id.
   * @param options The list modules request options.
   */
  listModules(activityId: number, options: RelationListOptions<Module> = {}) {
    return this.defaultRelationList<Module>(activityId, 'modules', options);
  }

  /**
   * PATCH /activities/{activityId}/modules
   * @param activityId The activity id.
   * @param moduleIds The modules or the module ids.
   * @param options The reorder modules request options.
   */
  reorderModules(activityId: number, moduleIds: number[], options: RelationReorderOptions<Module> = {}) {
    return this.defaultRelationReorder<Module>(activityId, 'modules', moduleIds, options);
  }

  mark(activityId: number, status) {
    return this.http.patch(`${this.url}/${activityId}/mark`, {status});
  }

  unmark(activityId: number, status) {
    return this.http.patch(`${this.url}/${activityId}/unmark`, {});
  }
}
