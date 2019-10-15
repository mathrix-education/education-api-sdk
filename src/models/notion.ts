import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export type NotionType = 'normal' | 'premium' | 'reminder' | 'further';

export interface Notion extends Model<number> {
  name: string;
  type: NotionType;
  visible: boolean;
  order: number;
  chapter_id: number;
  activity_count: number;
  created_at: Date;
  updated_at: Date;
}
