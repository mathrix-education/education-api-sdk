import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export type VoteValue = 1 | -1;

export class Vote extends Model<number> {
  value: VoteValue;
  comment_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
