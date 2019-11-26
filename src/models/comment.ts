import {ModelWithDates} from '@mathrix-education/iridium';

// tslint:disable:variable-name


export interface Comment extends ModelWithDates<number> {
  content: string;
  parent_id: number;
  user_id: number;
  module_id: number;
  readonly deleted_at: Date;
}
