import {BaseUrl, DataResponse, DefaultAdapter, Endpoint, UpdateOptions} from '@mathrix-education/iridium';
import {Grade} from '../models/grade';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Discipline} from '../models/discipline';
import {Chapter} from '../models/chapter';

/**
 * /grades endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class GradesEndpoint extends Endpoint<Grade> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'grades', new DefaultAdapter<Grade>()
    );
  }

  /**
   * GET /grades
   * List the grades.
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /grades
   * @param grade The grade model.
   */
  create(grade: Grade) {
    return this.defaultCreate(grade);
  }

  /**
   * GET /grades/{gradeId}
   * @param gradeId The grade id.
   */
  read(gradeId: number) {
    return this.defaultRead(gradeId);
  }

  /**
   * PATCH /grades/{gradeId}
   * @param gradeId The grade id.
   * @param grade The grade model.
   * @param options The update grade request options.
   */
  update(gradeId: number, grade: Grade, options: UpdateOptions<Grade>) {
    return this.defaultUpdate(gradeId, grade, options);
  }

  /**
   * DELETE /grades/gradeId
   * @param gradeId The grade id.
   */
  delete(gradeId: number) {
    return this.defaultDelete(gradeId);
  }

  /**
   * GET /grades/slug/${gradeSlug}
   * @param slug: The grade slug.
   */
  bySlug(slug: string) {
    return this.defaultList({filters: [['slug', '=', slug]]});
  }

  /**
   * GET /grades/slug/{gradeSlug}/chapters/slug/{chapterSlug}
   * @param gradeSlug The grade slug.
   * @param chapterSlug The chapter slug.
   */
  chapterBySlug(gradeSlug: string, chapterSlug: string) {
    return this.http.get<DataResponse<Chapter>>(`${this.url}/slug/${gradeSlug}/chapters/slug/${chapterSlug}`);
  }

  /**
   * GET /grades/{gradeId}/disciplines
   * @param gradeId The grade id.
   */
  listDisciplines(gradeId: number) {
    return this.defaultRelationList<Discipline>(gradeId, 'disciplines',
      {
        filters: [
          ['visible', '=', false]
        ]
      }
    );
  }

  /**
   * GET /grades/{gradeId}/disciplines/visible
   * @param gradeId The grade id.
   */
  listDisciplinesVisible(gradeId: number) {
    return this.defaultRelationList<Discipline>(gradeId, 'disciplines',
      {
        filters: [
          ['visible', '=', true]
        ]
      }
    );
  }

  /**
   * GET /grades/{gradeId}/chapters/visible
   * @param gradeId The grade id.
   * @param chapterId The chapter id.
   */
  listChapters(gradeId: number, chapterId: number) {
    return this.defaultRelationList<Chapter>(gradeId, 'disciplines',
      {
        filters: [
          ['id', '=', chapterId],
          ['visible', '=', true]
        ]
      }
    );
  }

  /**
   * GET /grades/slug/{gradeSlug}/chapters/slug/{chapterSlug}
   * @param gradeSlug The grade slug.
   * @param chapterSlug The chapter slug.
   */
  listChaptersBySlug(gradeSlug: string, chapterSlug: string) {
    return this.http.get<DataResponse<Chapter>>(`${this.url}/grades/slug/${gradeSlug}/chapters/${chapterSlug}`);
  }

  /**
   * GET /grades/{gradeId}/disciplines
   * @param gradeId The grade id.
   * @param chapterId The chapter id.
   */
  listChaptersVisible(gradeId: number, chapterId: number) {
    return this.defaultRelationList<Chapter>(gradeId, 'disciplines',
      {
        filters: [
          ['id', '=', chapterId],
          ['visible', '=', true]
        ]
      }
    );
  }
}
