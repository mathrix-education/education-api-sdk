import {Endpoint} from '../lib/endpoints/endpoint';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {DataResponse} from '../lib/responses/data.response';

/**
 * /users endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class UsersEndpoint extends Endpoint<User> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(
      http,
      config.baseUrl,
      'users',
      new DefaultAdapter(User)
    );
  }

  /**
   * GET /users/:id
   * @param id The user id.
   */
  read(id: number): Observable<DataResponse<User>> {
    return this.defaultRead(id);
  }

  /**
   * PATCH /users/:id
   * @param id The user id.
   * @param model The user.
   */
  update(id: number, model: User): Observable<DataResponse<User>> {
    return this.defaultUpdate(id, 'id', model);
  }
}
