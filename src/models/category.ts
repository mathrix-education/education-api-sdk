import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export class Category extends Model<number> {
  name: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
}
