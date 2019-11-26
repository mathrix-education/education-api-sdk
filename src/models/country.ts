import {ModelWithDates} from '@mathrix-education/iridium';

export interface Country extends ModelWithDates<number> {
  name: string;
  slug: string;
  visible: boolean;
}
