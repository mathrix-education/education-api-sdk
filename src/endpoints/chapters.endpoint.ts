import {Endpoint} from '../lib/endpoints/endpoint';
import {Chapter} from '../models/chapter';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {CreateOptions} from '../lib/options/create-options';
import {UpdateOptions} from '../lib/options/update-options';

export class ChaptersEndpoint extends Endpoint<Chapter> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(
      http,
      config.baseUrl,
      'chapters',
      new DefaultAdapter<Chapter>()
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
   * @param options The create chapter request options.
   */
  create(chapter: Chapter, options: CreateOptions<Chapter>) {
    return this.defaultCreate(chapter, options);
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
