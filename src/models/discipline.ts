import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export class Discipline extends Model<number> {
  name: string;
  slug: string;
  beta: boolean;
  visible: boolean;
  created_at: Date;
  updated_at: Date;
}
