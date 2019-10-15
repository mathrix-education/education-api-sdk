import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface Country extends Model<number> {
  name: string;
  slug: string;
  visible: boolean;
  created_at: Date;
  updated_at: Date;
}
