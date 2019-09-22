import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export class Post extends Model<number> {
  title: string;
  slug: string;
  module_id: number;
  category_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
