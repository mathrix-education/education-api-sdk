import {ModelWithDates} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export interface Category extends ModelWithDates<number> {
  name: string;
  slug: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
