import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export type VoteValue = 1 | -1;

export interface Vote extends ModelWithDates<number> {
  value: VoteValue;
  comment_id: number;
  user_id: number;
}
