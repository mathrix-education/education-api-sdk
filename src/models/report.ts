import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export type ReportType = 'display' | 'spelling' | 'wrong' | 'other';
export type ReportStatus = 'todo';

export interface Report extends Model<number> {
  type: ReportType;
  content: string;
  status: ReportStatus;
  module_id: number;
  created_at: Date;
  updated_at: Date;
}
