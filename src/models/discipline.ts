import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export interface Discipline extends ModelWithDates<number> {
  name: string;
  slug: string;
  beta: boolean;
  visible: boolean;
}
