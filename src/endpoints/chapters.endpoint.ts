import {Endpoint} from '../lib/endpoints/endpoint';
import {Chapter} from '../models/chapter';
import {HttpClient} from '@angular/common/http';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {UpdateOptions} from '../lib/options/update-options';
import {Create} from '../lib/adapters/create';
import {Inject, Injectable} from '@angular/core';
import {BaseUrl} from '../education-api-sdk.config';

/**
 * /chapters endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class ChaptersEndpoint extends Endpoint<Chapter> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'chapters', new DefaultAdapter<Chapter>()
    );
  }

  /**
   * GET /chapters
   * List the chapters.
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /chapters
   * @param chapter The chapter model.
   */
  create(chapter: Create<Chapter>) {
    return this.defaultCreate(chapter);
  }

  /**
   * GET /chapters/{chapterId}
   * @param chapterId The chapter id.
   */
  read(chapterId: number) {
    return this.defaultRead(chapterId);
  }

  /**
   * PATCH /chapters/{chapterId}
   * @param chapterId The chapter id.
   * @param chapter The chapter model.
   * @param options The update chapter request options.
   */
  update(chapterId: number, chapter: Chapter, options: UpdateOptions<Chapter>) {
    return this.defaultUpdate(chapterId, chapter, options);
  }

  /**
   * DELETE /chapters/chapterId
   * @param chapterId The chapter id.
   */
  delete(chapterId: number) {
    return this.defaultDelete(chapterId);
  }
}
