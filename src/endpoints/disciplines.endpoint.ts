import {Injectable} from '@angular/core';
import {Endpoint} from '../lib/endpoints/endpoint';
import {Discipline} from '../models/discipline';
import {HttpClient} from '@angular/common/http';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {UpdateOptions} from '../lib/options/update-options';
import {Create} from '../lib/adapters/create';

/**
 * /disciplines endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class DisciplinesEndpoint extends Endpoint<Discipline> {
  constructor(http: HttpClient) {
    super(http, 'disciplines', new DefaultAdapter<Discipline>());
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
   */
  create(discipline: Create<Discipline>) {
    return this.defaultCreate(discipline);
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
