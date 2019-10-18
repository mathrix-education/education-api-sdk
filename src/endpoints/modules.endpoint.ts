import {Endpoint} from '../lib/endpoints/endpoint';
import {Module} from '../models/module';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {CreateOptions} from '../lib/options/create-options';

export class ModulesEndpoint extends Endpoint<Module> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'modules');
  }

  /**
   * GET /modules
   * List the modules.
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /modules
   * @param module The module model.
   * @param options The create module request options.
   */
  create(module: Module) {
    return this.defaultCreate(module);
  }

  /**
   * GET /modules/{moduleId}
   * @param moduleId The module id.
   */
  read(moduleId: number) {
    return this.defaultRead(moduleId);
  }

  /**
   * PATCH /modules/{moduleId}
   * @param moduleId The module id.
   * @param module The module model.
   */
  update(moduleId: number, module: Module) {
    return this.defaultUpdate(moduleId, module);
  }

  /**
   * DELETE /modules/moduleId
   * @param moduleId The module id.
   */
  delete(moduleId: number) {
    return this.defaultDelete(moduleId);
  }

  /**
   * GET /modules/{moduleId}/comments
   * @param moduleId The module id.
   */
  listComments(moduleId: number) {
    return this.defaultRelationList(moduleId, 'comments');
  }

  /**
   * GET /modules/{moduleId}/reports
   * @param moduleId The module id.
   */
  listReports(moduleId: number) {
    return this.defaultRelationList(moduleId, 'reports');
  }

  /**
   * PATCH activities:activityId/mark
   * @param moduleId The module id.
   */
  mark(moduleId: number) {
  }
}
