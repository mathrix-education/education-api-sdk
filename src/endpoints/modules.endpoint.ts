import {Endpoint} from '../lib/endpoints/endpoint';
import {Module} from '../models/module';
import {HttpClient} from '@angular/common/http';
import {EducationAPISDKConfig} from '../education-api-sdk.config';

export class ModulesEndpoint extends Endpoint<Module> {
  constructor(http: HttpClient, config: EducationAPISDKConfig) {
    super(http, config, 'modules');
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
