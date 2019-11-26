import {ModelWithDatesOrder} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export type ActivityType = 'video' | 'course' | 'test' | 'exercise' | 'summary' | 'flashcard';

export type MarkType = 'completed' | 'view' | 'to-revise';

export interface Activity extends ModelWithDatesOrder<number> {
  name: string;
  type: ActivityType;
  visible: boolean;
  premium: boolean;
  reviewed: boolean;
  notion_id: number;
  readonly module_count: number;
}




