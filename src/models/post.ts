import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export interface Post extends ModelWithDates<number> {
  title: string;
  slug: string;
  module_id: number;
  category_id: number;
  user_id: number;
}
