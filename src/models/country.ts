import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export class Country extends Model<number> {
  name: string;
  slug: string;
  visible: boolean;
  created_at: Date;
  updated_at: Date;
}
