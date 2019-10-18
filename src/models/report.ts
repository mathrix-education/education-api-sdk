import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export type ReportType = 'display' | 'spelling' | 'wrong' | 'other';
export type ReportStatus = 'todo';

export interface Report extends ModelWithDates<number> {
  type: ReportType;
  content: string;
  status: ReportStatus;
  module_id: number;
}
