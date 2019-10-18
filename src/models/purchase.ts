import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export interface Purchase extends ModelWithDates<number> {
  transaction_id: string;
  user_id: number;
  product_id: number;
}
