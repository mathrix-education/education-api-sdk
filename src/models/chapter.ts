import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export interface Chapter extends ModelWithDates<number> {
  name: string;
  slug: string;
  order: number;
  visible: boolean;
  discipline_id: number;
  grade_id: number;
  notion_count: number;
  activity_count: number;
}
