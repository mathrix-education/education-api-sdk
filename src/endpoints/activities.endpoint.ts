import {Endpoint} from '../lib/endpoints/endpoint';
import {Activity} from '../models/activity';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {SearchOptions} from '../lib/options/search-options';
import {Module} from '../models/module';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DataResponse} from '../lib/responses/data.response';

/**
 * /activities endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class ActivitiesEndpoint extends Endpoint<Activity> {
  private moduleAdapter = new DefaultAdapter(Module);

  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, '/activities', new DefaultAdapter(Activity));
  }

  /**
   * GET /activities
   */
  search(options: Partial<SearchOptions>) {
    return this.defaultSearch(options);
  }

  /**
   * POST /activities
   * @param activity The activity model.
   */
  create(activity: Activity): Observable<DataResponse<Activity>> {
    return this.defaultCreate(activity);
  }

  /**
   * GET /activities/{activityId}
   * @param activityId The activity id.
   */
  read(activityId: number): Observable<DataResponse<Activity>> {
    return this.defaultRead(activityId, 'id');
  }

  /**
   * PATCH /activities/{activityId}
   * @param activityId The activity id.
   * @param activity The activity model.
   */
  update(activityId: number, activity: Activity): Observable<DataResponse<Activity>> {
    return this.defaultUpdate(activityId, 'id', activity);
  }

  /**
   * GET /activities/{activityId}/modules
   * @param activityId The activity id.
   */
  listModules(activityId: number): Observable<Module[]> {
    return this.http.get(`${this.url}/modules`)
      .pipe(map(this.moduleAdapter.adaptMany));
  }

  /**
   * PATCH /activities/{activityId}/modules
   * @param activityId The activity id.
   * @param modules The modules or the module ids.
   */
  reorderModules(activityId: number, modules: (Module | number)[]): Observable<Module[]> {
    const moduleIds = modules.map(m => typeof m === 'object' ? m.id : m);

    return this.http.patch(`${this.url}/modules`, moduleIds)
      .pipe(map(this.moduleAdapter.adaptMany));
  }
}
