import {ModelWithDates} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export interface Discipline extends ModelWithDates<number> {
  name: string;
  slug: string;
  beta: boolean;
  visible: boolean;
}
