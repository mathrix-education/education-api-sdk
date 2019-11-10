import {ModelWithDatesOrder} from '../lib/models/model';

// tslint:disable:variable-name

export interface Chapter extends ModelWithDatesOrder<number> {
  name: string;
  slug: string;
  visible: boolean;
  discipline_id: number;
  grade_id: number;
  notion_count: number;
  activity_count: number;
}
