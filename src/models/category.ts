import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export interface Category extends ModelWithDates<number> {
  name: string;
  slug: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
