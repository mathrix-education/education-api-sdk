import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export type ActivityType = 'video' | 'course' | 'test' | 'exercise' | 'summary' | 'flashcard';

export type MarkType = 'completed' | 'view' | 'to-revise';

export interface Activity extends Model<number> {
  name: string;
  type: ActivityType;
  visible: boolean;
  order: number;
  premium: boolean;
  reviewed: boolean;
  notion_id: number;
  module_count: number;
  created_at: Date;
  updated_at: Date;
}




