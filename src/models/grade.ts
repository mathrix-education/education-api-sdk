import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export class Grade extends Model<number> {
  name: string;
  slug: string;
  order: number;
  visible: boolean;
  parent_id: number;
  country_id: number;
}
