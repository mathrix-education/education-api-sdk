import {Endpoint} from '../lib/endpoints/endpoint';
import {Grade} from '../models/grade';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {CreateOptions} from '../lib/options/create-options';
import {UpdateOptions} from '../lib/options/update-options';
import {Discipline} from '../models/discipline';
import {Chapter} from '../models/chapter';

/**
 * /grades endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class GradesEndpoint extends Endpoint<Grade> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(
      http,
      config.baseUrl,
      'grades',
      new DefaultAdapter<Grade>()
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
   * @param options The create grade request options.
   */
  create(grade: Grade, options: CreateOptions<Grade>) {
    return this.defaultCreate(grade, options);
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
   * GET /grades/{gradeId}/disciplines/visible
   * @param gradeId The grade id.
   */
  listDisciplineVisible(gradeId: number) {
    return this.defaultRelationList<Discipline>(gradeId, 'disciplines',
      {
        filters: [
          ['visible', '=', true]
        ]
      }
    );
  }

  /**
   * GET /grades/{gradeId}/disciplines
   * @param gradeId The grade id.
   */
  listDiscipline(gradeId: number) {
    return this.defaultRelationList<Discipline>(gradeId, 'disciplines',
      {
        filters: [
          ['visible', '=', false]
        ]
      }
    );
  }

  /**
   * GET /grades/{gradeId}/chapters/visible
   * @param gradeId The grade id.
   * @param chapterId The chapter id.
   */
  listChapter(gradeId: number, chapterId: number) {
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
   * GET /grades/{gradeId}/disciplines
   * @param gradeId The grade id.
   * @param chapterId The chapter id.
   */
  listChapterVisible(gradeId: number, chapterId: number) {
    return this.defaultRelationList<Chapter>(gradeId, 'disciplines',
      {
        filters: [
          ['id', '=', chapterId],
          ['visible', '=', false]
        ]
      }
    );
  }
}
