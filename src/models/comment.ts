import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface Comment extends Model<number> {
  content: string;
  parent_id: number;
  user_id: number;
  module_id: number;
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;
}
