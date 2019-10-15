import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface Purchase extends Model<number> {
  transaction_id: string;
  user_id: number;
  product_id: number;
  created_at: Date;
  updated_at: Date;
}
