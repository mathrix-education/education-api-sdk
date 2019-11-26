import {Inject, Injectable} from '@angular/core';
import {Endpoint} from '@mathrix-education/iridium';
import {Discipline} from '../models/discipline';
import {HttpClient} from '@angular/common/http';
import {DefaultAdapter} from '@mathrix-education/iridium';
import {UpdateOptions} from '@mathrix-education/iridium';
import {Create} from '@mathrix-education/iridium';
import {BaseUrl} from '@mathrix-education/iridium';

/**
 * /disciplines endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class DisciplinesEndpoint extends Endpoint<Discipline> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'disciplines', new DefaultAdapter<Discipline>());
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
