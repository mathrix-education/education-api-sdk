import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export type ActivityType = 'video' | 'course' | 'test' | 'exercise' | 'summary' | 'flashcard';

export type MarkType = 'completed' | 'view' | 'to-revise';

export interface Activity extends ModelWithDates<number> {
  name: string;
  type: ActivityType;
  visible: boolean;
  order: number;
  premium: boolean;
  reviewed: boolean;
  notion_id: number;
  readonly module_count: number;
}




