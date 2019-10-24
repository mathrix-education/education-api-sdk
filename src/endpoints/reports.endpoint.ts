import {Endpoint} from '../lib/endpoints/endpoint';
import {Report} from '../models/report';
import {HttpClient} from '@angular/common/http';
import {Create} from '../lib/adapters/create';
import {BaseUrl} from '../education-api-sdk.config';
import {Inject} from '@angular/core';

export class ReportsEndpoint extends Endpoint<Report> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'reports');
  }

  /**
   * GET /reports
   * List the reports.
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /reports
   * @param report The report model.
   */
  create(report: Create<Report>) {
    return this.defaultCreate(report);
  }

  /**
   * GET /reports/{reportId}
   * @param reportId The report id.
   */
  read(reportId: number) {
    return this.defaultRead(reportId);
  }

  /**
   * PATCH /reports/{reportId}
   * @param reportId The report id.
   * @param report The report model.
   */
  update(reportId: number, report: Report) {
    return this.defaultUpdate(reportId, report);
  }

  /**
   * DELETE /reports/reportId
   * @param reportId The report id.
   */
  delete(reportId: number) {
    return this.defaultDelete(reportId);
  }
}
