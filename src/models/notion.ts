import {ModelWithDatesOrder} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export type NotionType = 'normal' | 'premium' | 'reminder' | 'further';

export interface Notion extends ModelWithDatesOrder<number> {
  name: string;
  type: NotionType;
  visible: boolean;
  order: number;
  chapter_id: number;
  activity_count: number;
}
