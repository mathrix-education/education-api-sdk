import {ModelWithOrder} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export interface Grade extends ModelWithOrder<number> {
  name: string;
  slug: string;
  visible: boolean;
  parent_id: number;
  country_id: number;
}
