import {Inject, Injectable} from '@angular/core';
import {Endpoint} from '../lib/endpoints/endpoint';
import {Discipline} from '../models/discipline';
import {HttpClient} from '@angular/common/http';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {CreateOptions} from '../lib/options/create-options';
import {UpdateOptions} from '../lib/options/update-options';

/**
 * /disciplines endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class DisciplinesEndpoint extends Endpoint<Discipline> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(
      http,
      config.baseUrl,
      'disciplines',
      new DefaultAdapter<Discipline>()
    );
  }

  /**
   * GET /disciplines
   * List the disciplines.
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /disciplines
   * @param discipline The discipline model.
   * @param options The create discipline request options.
   */
  create(discipline: Discipline, options: CreateOptions<Discipline>) {
    return this.defaultCreate(discipline, options);
  }

  /**
   * GET /disciplines/{disciplineId}
   * @param disciplineId The discipline id.
   */
  read(disciplineId: number) {
    return this.defaultRead(disciplineId);
  }

  /**
   * PATCH /disciplines/{disciplineId}
   * @param disciplineId The discipline id.
   * @param discipline The discipline model.
   * @param options The update discipline request options.
   */
  update(disciplineId: number, discipline: Discipline, options: UpdateOptions<Discipline>) {
    return this.defaultUpdate(disciplineId, discipline, options);
  }

  /**
   * DELETE /disciplines/disciplineId
   * @param disciplineId The discipline id.
   */
  delete(disciplineId: number) {
    return this.defaultDelete(disciplineId);
  }

  /**
   * GET /disciplines/slug
   * @param slug The slug.
   */
  listBySlug(slug: string) {
    return this.defaultList({filters: [['slug', '=', slug]]});
  }
}
