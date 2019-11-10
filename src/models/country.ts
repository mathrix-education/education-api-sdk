import {ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export interface Country extends ModelWithDates<number> {
  name: string;
  slug: string;
  visible: boolean;
}
