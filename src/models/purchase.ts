import {ModelWithDates} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export interface Purchase extends ModelWithDates<number> {
  transaction_id: string;
  user_id: number;
  product_id: number;
}
