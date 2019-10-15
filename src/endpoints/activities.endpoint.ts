import {Endpoint} from '../lib/endpoints/endpoint';
import {Activity} from '../models/activity';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {ListOptions} from '../lib/options/list-options';
import {Module} from '../models/module';
import {RelationListOptions} from '../lib/options/relation-list-options';
import {CreateOptions} from '../lib/options/create-options';
import {ReadOptions} from '../lib/options/read-options';
import {UpdateOptions} from '../lib/options/update-options';
import {RelationReorderOptions} from '../lib/options/relation-reorder-options';

/**
 * /activities endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class ActivitiesEndpoint extends Endpoint<Activity> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, '/activities');
  }

  /**
   * GET /activities
   * @param options The list activity request options.
   */
  list(options: ListOptions<Activity>) {
    return this.defaultList(options);
  }

  /**
   * POST /activities
   * @param activity The activity model.
   * @param options The create activity request options.
   */
  create(activity: Activity, options: CreateOptions<Activity>) {
    return this.defaultCreate(activity, options);
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
}
